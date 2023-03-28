"use client";
import InputForm from "@/components/Admin/InputForm";
import Thead from "@/components/Admin/Thead";
import TrBody from "@/components/Admin/TrBody";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Page() {
  const [datas, setDatas] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoading(true);
    try {
      const fetchDatas = async () => {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/?search=${query}`
        );
        setDatas(data);
        setIsLoading(false);
      };
      fetchDatas();
    } catch (error) {
      console.log(error);
    }
  }, [query]);

  const handleQuery = (event) => {
    setQuery(event.target.value);
  };

  const handleDelete = async (id) => {
    console.log(id);
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/${id}`);
      toast.success("Success delete news");
    } catch (error) {
      toast.error("Failed delete news");
      console.log(error);
    }
  };

  return (
    <section>
      <div className="wrapper">
        <h1 className="text-3xl font-semibold font-ssp text-center py-6">
          News Report
        </h1>
        <ToastContainer />
        <div className="mt-6">
          <button
            onClick={() => router.push("/admin/new")}
            className="px-6 py-2 bg-dark text-base text-zinc-200 font-semibold rounded-sm"
          >
            Add new
          </button>
        </div>
        <div className="w-2/5 mt-8">
          <InputForm
            type={"text"}
            value={query}
            placeholder={"Search e.g VS Code"}
            onChange={handleQuery}
          />
        </div>
        <div className="mt-6">
          <Thead>
            {isLoading && (
              <tr className="absolute left-1/2 mt-2">
                <td>Loading...</td>
              </tr>
            )}
            {datas && (
              <>
                {datas.map((item, index) => {
                  return (
                    <TrBody
                      key={index}
                      index={index + 1}
                      title={item.title}
                      author={item.author[0].name}
                      category={item.category}
                      date={item.date}
                      time={item.time}
                      edit={() => router.push(`admin/${item._id}`)}
                      delete={() => handleDelete(item._id)}
                    />
                  );
                })}
              </>
            )}
          </Thead>
        </div>
      </div>
    </section>
  );
}
