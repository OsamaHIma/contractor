import { Typography } from '@mui/material'
import React from 'react'

function TeamsAdded({ team, DeleteItem }) {

    return (
        <>
            {team ? (
                team.map((item) => {
                    return (
                        <Typography variant='div' component="div" key={item.id} style={{ marginTop: "20px", marginRight: "35px" }}>
                            <Typography variant='div' component="div" style={{ position: "relative", background: "rgba(225, 225, 225, 0.4)", width: "200px", height: "40px" }}>
                                <Typography variant='div' component="div" style={{ display: "flex", alignItems: "center", height: "100%", padding: "10px", color: "white" }}>
                                    <Typography variant='div' component="div">
                                        {item.name}
                                    </Typography>
                                </Typography>
                                <Typography variant='div' component="div" onClick={() => DeleteItem(item.id)} style={{
                                    position: "absolute",
                                    right: "0",
                                    top: "0",
                                    bottom: "0",
                                    width: "40px",
                                    background: "rgba(225, 225, 225, 0.4)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: "pointer"
                                }}>
                                    <Typography variant='div' component="div" style={{ color: "white", fontWeight: "bold" }}>X</Typography>
                                </Typography>
                            </Typography>
                        </Typography>
                    )
                }
                )
            )
                : null}
        </>
    )
}

export default TeamsAdded
