import sys
import numpy as np
import scipy
from scipy.linalg import svd
# from scipy.linalg import null_space
# import scipy.linalg.null_space

# For Pyodide
import js
from js import data

print('Python version', sys.version)
print('scipy version: ', scipy.__version__)

# Convert JSON array to python List
data = data.to_py()
# print(data)

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

print("Length", len(teams))

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
# Convert to a python List
ranking = ranking_matrix.flatten().tolist()
# Create dict and combine values of teams and ranking
ranking_dict = {}
for i, rank in enumerate(ranking):
    ranking_dict[teams[i]] = rank 

print(ranking_dict)
# Sent to JS variable
js.ranking = ranking_dict

