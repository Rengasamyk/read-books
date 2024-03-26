import React, { memo,useEffect,useState } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import withStyles from "@mui/styles/withStyles";
import Dashboard from "./dashboard/Dashboard";
import UpdateProfile from "./profile/UpdateProfile";
import PropsRoute from "../../shared/components/PropsRoute";
import useLocationBlocker from "../../shared/functions/useLocationBlocker";
// import Blog from "./blog/Blog";
import BlogPost from "./blog/BlogPost";
import SearchPage from "./dashboard/SearchPage";
import * as BooksAPI from "./dashboard/BooksAPI";

const styles = (theme) => ({
  wrapper: {
    margin: theme.spacing(1),
    width: "auto",
    [theme.breakpoints.up("xs")]: {
      width: "95%",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: "82.5%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: "85%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
});

function Routing(props) {
  const {
    classes,
    transactions,
    targets,
    setTargets,
    selectDashboard,
    //selectGoodReadsDashboard,
    blogPosts,
    selectUpdateProfile,
  } = props;
  useLocationBlocker();
  const [fetchedBooks, setFetchedBooks] = useState([]);

	useEffect(() => {
		const getBooks = async () => {
			const response = await BooksAPI.getAll();
			if (response.error) {
				console.log("Network Error");
			}
			setFetchedBooks(response);
		};
		getBooks();
	}, []);

	const changeBookShelf = (book, shelf) => {
		BooksAPI.update(book, shelf);
		if (shelf === "none") {
			setFetchedBooks(fetchedBooks.filter((b) => b.id !== book.id));
		} else {
			book.shelf = shelf;
			setFetchedBooks(
				fetchedBooks.filter((b) => b.id !== book.id).concat(book)
			);
		}
	};

  return (
    <div className={classes.wrapper}>
      <Switch>
        <PropsRoute
          exact
          path="/good-reads/mybooks"
          component={Dashboard}
          targets={targets}
          setTargets={setTargets}
          selectDashboard={selectDashboard}
        />
        {blogPosts.map((post) => (
          <PropsRoute
            path={post.url}
            component={BlogPost}
            title={post.title}
            key={post.title}
            src={post.src}
            date={post.date}
            content={post.content}
            otherArticles={blogPosts.filter(
              (blogPost) => blogPost.id !== post.id
            )}
          />
        ))}
        {/* <PropsRoute
          exact
          path="/viridinumu/student/dashboard"
          component={Blog}
          blogPosts={blogPosts}
          targets={targets}
          setTargets={setTargets}
          selectDashboard={selectDashboard}
        /> */}

        <PropsRoute
          path="/good-reads/updateprofile"
          component={UpdateProfile}
          transactions={transactions}
          selectUpdateProfile={selectUpdateProfile}
        />
         <PropsRoute
          path="/good-reads/search"
          component={SearchPage}
          changeBookShelf={changeBookShelf}
							fetchedBooks={fetchedBooks}
          // transactions={transactions}
          // selectUpdateProfile={selectUpdateProfile}
        />
      </Switch>
    </div>
  );
}

Routing.propTypes = {
  classes: PropTypes.object.isRequired,
  setTargets: PropTypes.func.isRequired,
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
  statistics: PropTypes.object.isRequired,
  targets: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectDashboard: PropTypes.func.isRequired,
  selectSubscription: PropTypes.func.isRequired,
  selectUpdateProfile: PropTypes.func,
 
};

export default withStyles(styles, { withTheme: true })(memo(Routing));
