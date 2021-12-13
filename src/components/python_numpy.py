import sys
import numpy as np
import scipy
from scipy.linalg import svd
# from scipy.linalg import null_space
# import scipy.linalg.null_space

# For Pyodide
import js
# Import variable from js global variable (window.pyinput)
from js import pyinput

print('Python version', sys.version)
print('scipy version: ', scipy.__version__)

# Convert JSON array to python List
data = pyinput.to_py()

# Custom null-space equation since scipy didn't have it until v1.1.0
# https://github.com/scipy/scipy/blob/c3fd6d11aa1476f8d284c205fcf585c20a9f9ac5/scipy/linalg/decomp_svd.py#L333
def null_space(A, rcond=None):
    u, s, vh = svd(A, full_matrices=True)
    M, N = u.shape[0], vh.shape[1]
    if rcond is None:
        rcond = np.finfo(s.dtype).eps * max(M, N)
    tol = np.amax(s) * rcond
    num = np.sum(s > tol, dtype=int)
    Q = vh[num:,:].T.conj()
    return Q


# Generate Teams list
teams = []
for game in data:
    if game["home_team"] not in teams:
        teams.append(game["home_team"])

    if game["away_team"] not in teams:
        teams.append(game["away_team"])

# Generate game matrix
M = np.zeros((len(teams), len(teams)), dtype=int)
for game in data:
    i = teams.index(game["home_team"])
    j = teams.index(game["away_team"])
    M[i, j] = game["home_points"] if game["home_points"] != None else 0
    M[j, i] = game["away_points"] if game["away_points"] != None else 0

# Sum of the columns in 1D matrix
colsum = np.sum(M, axis=0)
# Subtract games matrix with diagonal matrix of column sum
diff = M - np.diag(colsum)
# compute null-space matrix of the difference
ranking_matrix = null_space(diff)
print('ranking matrix', ranking_matrix)

# Quick-fix for when null_space returns a matrix size of (x,>1) instead of expected (x,1)
if (ranking_matrix.shape[1] != 1):
    print('uh oh, no bueno')
    new_ranking_matrix = np.array([])
    for row in ranking_matrix:
        best_cell = 0
        # print(row)
        for cell in row:
            if cell > best_cell:
                best_cell = cell
        new_value = np.array([best_cell])
        print(new_value)
        new_ranking_matrix = np.append(new_ranking_matrix, new_value, axis=0)
    print('new matrix', len(new_ranking_matrix), new_ranking_matrix)
    ranking_matrix = new_ranking_matrix

# Convert to a python List
ranking = ranking_matrix.flatten().tolist()
# Create dict and combine values of teams and ranking
ranking_dict = {}
print(ranking)
print("adding", len(ranking),"ranks to", len(teams), "teams")
for i, rank in enumerate(ranking):
    ranking_dict[teams[i]] = rank 

print(ranking_dict)
# Sent to JS variable
js.pyret = ranking_dict

