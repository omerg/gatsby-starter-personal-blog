import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import config from "../../../content/meta/config";

import LinkedInIcon from "!svg-react-loader!../../images/svg-icons/linkedin.svg?name=LinkedInIcon";
import GithubIcon from "!svg-react-loader!../../images/svg-icons/github.svg?name=GithubIcon";
import FacebookIcon from "!svg-react-loader!../../images/svg-icons/facebook.svg?name=FacebookIcon";
import TwitterIcon from "!svg-react-loader!../../images/svg-icons/twitter.svg?name=TwitterIcon";
import StackOverflowIcon from "!svg-react-loader!../../images/svg-icons/stack-overflow.svg?name=StackOverflowIcon";
import HackerRankIcon from "!svg-react-loader!../../images/svg-icons/hackerRank.svg?name=HackerRankIcon";

const styles = theme => ({
  social: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  link: {
    display: "inline-block",
    padding: "5px",
    "&:hover": {
      "& svg": {
        fill: theme.info.colors.socialIconsHover
      }
    }
  },
  svg: {
    width: "40px",
    height: "40px",
    fill: theme.info.colors.socialIcons,
    transition: "all .5s"
  }
});

const Socialcons = props => {
  const { classes } = props;
  const items = config.authorSocialLinks;
  const icons = {
     LinkedIn: LinkedInIcon,
    Twitter: TwitterIcon,
     Facebook: FacebookIcon,
    Github: GithubIcon,
    StackOverflow: StackOverflowIcon,
    HackerRank: HackerRankIcon
  };

  return (
    <div className={classes.social}>
      {items.map(item => {
        const Icon = icons[item.name];
        return (
          <a
            href={item.url}
            key={item.name}
            className={classes.link}
            target="_blank"
            rel="noopener noreferrer"
            title={item.name}
          >
            <Icon className={classes.svg} />
          </a>
        );
      })}
    </div>
  );
};

Socialcons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Socialcons);
