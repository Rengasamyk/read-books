import React, { memo, useCallback, useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from '@mui/styles/withStyles';
import Routing from "./Routing";
import NavBar from "./navigation/NavBar";
import smoothScrollTop from "../../shared/functions/smoothScrollTop";
import dummyBlogPosts from "../dummy_data/blogPosts";


const styles = (theme) => ({
  main: {
    marginLeft: theme.spacing(9),
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
});


function Main(props) {
  const { classes } = props;
  const [selectedTab, setSelectedTab] = useState(null);
  const [CardChart, setCardChart] = useState(null);
  const [blogPosts, setBlogPosts] = useState([]);
  const [hasFetchedCardChart, setHasFetchedCardChart] = useState(false);
  const [targets, setTargets] = useState([]);

 


  const selectDashboard = useCallback(() => {
    smoothScrollTop();
    document.title = "mybooks - Dashboard";
    setSelectedTab("Dashboard");
    if (!hasFetchedCardChart) {
      setHasFetchedCardChart(true);
      import("../../shared/components/CardChart").then((Component) => {
        setCardChart(Component.default);
      });
    }
  }, [
    setSelectedTab,
    setCardChart,
    hasFetchedCardChart,
    setHasFetchedCardChart,
  ]);
    // const selectDashboard = useCallback(() => {
    // smoothScrollTop();
    // document.title = "goodreads - Dashboard";
    // setSelectedTab("Dashboard");
    // }, [setSelectedTab]);
  
   const fetchBlogPosts = useCallback(() => {
    const blogPosts = dummyBlogPosts.map((blogPost) => {
      let title = blogPost.title;
      title = title.toLowerCase();
      /* Remove unwanted characters, only accept alphanumeric and space */
      title = title.replace(/[^A-Za-z0-9 ]/g, "");
      /* Replace multi spaces with a single space */
      title = title.replace(/\s{2,}/g, " ");
      /* Replace space with a '-' symbol */
      title = title.replace(/\s/g, "-");
      blogPost.url = `/blog/post/${title}`;
      blogPost.params = `?id=${blogPost.id}`;
      return blogPost;
    });
    setBlogPosts(blogPosts);
  }, [setBlogPosts]);


  const selectUpdateProfile = useCallback(() => {
    smoothScrollTop();
    document.title = "Viridi Numu - UpdateProfile";
    setSelectedTab("Update Profile");
  }, [setSelectedTab]);
 
  useEffect(fetchBlogPosts, [fetchBlogPosts]);

  return (
    <Fragment>
      <NavBar
        selectedTab={selectedTab}
        //messages={messages}
      />

      <main className={classNames(classes.main)}>
        <Routing
          CardChart={CardChart}
          //transactions={transactions}
          //statistics={statistics}
          targets={targets}
          selectDashboard={selectDashboard}
          selectUpdateProfile={selectUpdateProfile}
          setTargets={setTargets}
          //selectGoodReadsDashboard={selectGoodReadsDashboard}
          blogPosts={blogPosts}
        />
      </main>
    </Fragment>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(Main));
