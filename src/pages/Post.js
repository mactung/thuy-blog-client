import React, { useEffect, useState } from "react";
import firebase from "firebase";
import ReactHTMLParser from "react-html-parser";
import { Container, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";

export default function Post(props) {
  const [post, setPost] = useState({});
  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    firebase
      .firestore()
      .collection("posts")
      .doc(id)
      .get()
      .then((doc) => {
        setPost(doc.data());
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container>
      <Typography variant="h2">{post.title}</Typography>
      <div>{ReactHTMLParser(post.content)}</div>
    </Container>
  );
}
