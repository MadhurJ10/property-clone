import { createContext, useContext } from "react";
import { portfolioData } from "../data/portfolioData";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ slug, children }) => {
  const project = portfolioData[slug];

  if (!project) {
    throw new Error("Project not found");
  }

  return (
    <PortfolioContext.Provider value={project}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);
