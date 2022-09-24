import { createStyles } from "@mantine/core";
import { Tabs } from "@mantine/core";
import { Dispatch, SetStateAction, useState } from "react";
import { useSession } from "next-auth/react";
import { UserMenu } from "./UserMenu";

const useStyles = createStyles((theme, _params, getRef) => ({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        margin: 0,
        padding: "20px",
        gap: "30px 0",
    },
    headerRow: {
        display: "flex",
    },
    topRow: {
        justifyContent: "space-between",
    },
}));

interface HeaderProps {
    activeTab: string;
    setActiveTab: (arg0: string) => void;
    displayNav: boolean;
}

export const Header = ({
    activeTab,
    setActiveTab,
    displayNav,
}: HeaderProps) => {
    const { classes, theme, cx } = useStyles();

    return (
        <div className={classes.wrapper}>
            <div className={`${classes.headerRow} ${classes.topRow}`}>
                <div>G.T.D.</div>
                <div>
                    <UserMenu />
                </div>
            </div>
            {displayNav && (
                <div className={classes.headerRow}>
                    <Tabs value={activeTab} onTabChange={setActiveTab}>
                        <Tabs.List>
                            <Tabs.Tab value="single">To-do</Tabs.Tab>
                            <Tabs.Tab value="all">To-do's</Tabs.Tab>
                        </Tabs.List>
                    </Tabs>
                </div>
            )}
        </div>
    );
};
