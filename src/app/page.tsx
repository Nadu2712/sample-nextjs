"use client";

import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "@/slices/userSlice";
import { useEffect } from "react";
import { AppDispatch, RootState } from "@/store/store";

export default function Home() {
  const { entities } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  console.log("=======================================");
  console.log("entities");
  console.log("=======================================");

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return <div>Hello</div>;
}
