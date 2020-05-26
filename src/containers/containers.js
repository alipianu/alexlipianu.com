import OptionsContainer from './options/options';
import LandingContainer from './landing/landing';
import InterestsContainer from './interests/interests';
import ActivityContainer from './activity/activity';
import CoursesContainer from './courses/courses';
import PortfolioContainer from './portfolio/portfolio';

// Containers module
export {
  OptionsContainer,
  LandingContainer,
  InterestsContainer,
  ActivityContainer,
  CoursesContainer,
  PortfolioContainer
};

// Record<string, Container> exported as default for dynamic container rendering from API
export default {
  OptionsContainer,
  LandingContainer,
  InterestsContainer,
  ActivityContainer,
  CoursesContainer,
  PortfolioContainer
};