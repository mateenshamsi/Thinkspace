"use client";

import React from "react";
import ArticleModal from "./ArticleModal";

interface ArticleModalSSProps extends React.PropsWithChildren {
  article: any;
  isOpen: boolean;
  onClose: () => void;
}

export default function ArticleModalSS(props: ArticleModalSSProps) {
  return <ArticleModal {...props} />;
}
