import subprocess

# Install PyPortfolioOpt with version 1.4.1
subprocess.run(["pip", "install", "PyPortfolioOpt==1.4.1"])

# Import EfficientFrontier
from pypfopt.efficient_frontier import EfficientFrontier

# Now you can use the EfficientFrontier class in your script
# For example:
# ef = EfficientFrontier(expected_returns, cov_matrix)
# ... rest of your code ...
