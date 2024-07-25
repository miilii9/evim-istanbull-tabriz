"use client";
import { getMessages } from "@/services/authService";
import React, { useEffect, useState, useRef } from "react";
import dayjs from "dayjs";
import { DownloadTableExcel } from "react-export-table-to-excel";

export default function UsersTable() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const tableRef = useRef(null);

  const getTableData = () => {
    setLoading(true);
    getMessages()
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          setData(res.data);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    getTableData();
    // returnTable();
  }, []);
  useEffect(() => {}, [tableRef]);
  console.log(tableRef);
  const expertsData = {
    header: ["#", "نام کاربری", "شماره تماس", "ایجاد شده"],
  };
  const returnTable = () => {
    const table = (
      <table className='table w-full' ref={tableRef}>
        <thead>
          <tr>
            {expertsData.header.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.username}</td>
              <td>{item.phone}</td>
              <td>{dayjs(item.createdAt).format("YYYY/MM/DD")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
    // tableRef.current = table;
    return table;
  };

  return (
    <div className='wrapper pb-24'>
      <div className='layout flex-col'>
        {loading ? (
          <span className='loading loading-spinner self-center mx-auto'></span>
        ) : (
          <>
            <h1 className='font-bold text-2xl'>لیست کاربران</h1>
            <DownloadTableExcel
              filename='users table'
              sheet='users'
              currentTableRef={tableRef.current}>
              <button className='btn btn-active btn-secondary my-4'>
                export excel
              </button>
            </DownloadTableExcel>
            <div className='card w-full bg-white shadow-xl  text-black'>
              <div className='card-body'>
                <div className='overflow-x-auto'>
                  {returnTable()}
                  {/* <table className='table text-black table-lg' ref={tableRef}>
                    <thead>
                      <tr>
                        {expertsData.header.map((item, index) => (
                          <th className='text-black' key={index}>
                            {item}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data?.length > 0 ? (
                        data.map((tr, index) => {
                          const currentTime = tr.createdAt;
                          const parsedDate = new Date(currentTime);
                          return (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{tr.fullName}</td>
                              <td className='font-number'>{tr.phone}</td>

                              <td>
                                {dayjs(tr.createdAt).format("YYYY-MM-DD")}
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr>دیتایی موجود نیست</tr>
                      )}
                    </tbody>
                  </table> */}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
