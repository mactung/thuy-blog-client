import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { Container } from "@material-ui/core";
import PostPreview from "../components/PostPreview";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  container: {
    justifyContent: "center",
  },
});
export default function Home() {
  const postRefs = firebase.firestore().collection("posts");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    postRefs.get().then((result) => {
      let data = result.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setPosts(data);
    });
  }, []);
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      {posts.map((post, i) => (
        <PostPreview key={i} title={post.title} id={post.id} />
      ))}
    </Container>
  );
}
