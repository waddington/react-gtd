import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { NextLink } from "@mantine/next";
import { Button, Tabs } from "@mantine/core";
import { Header } from "../components/header/Header";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { TodoListsOverview } from "../components/todo-overview/TodoListsOverview";
import { TodoList } from "../components/todo-overview/TodoList";

const Home: NextPage = () => {
    const [activeTab, setActiveTab] = useState<string>("all");
    const { data: session } = useSession();

    // TODO: these 2 should be based on a hook that gets the persistence strategy, no strategy = no show
    const displayNavigation = session !== null;
    const displayTabContent = displayNavigation;

    return (
        <div>
            <Header
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                displayNav={displayNavigation}
            />

            {displayTabContent && (
                <Tabs value={activeTab}>
                    <Tabs.Panel value="single">
                        <TodoList />
                    </Tabs.Panel>
                    <Tabs.Panel value="all">
                        <TodoListsOverview />
                    </Tabs.Panel>
                </Tabs>
            )}

            {!displayTabContent && (
                <div>
                    <h1>G.T.D. Todo List</h1>
                    <p>Some generic to do list</p>
                    <p>Sign in above to view</p>
                </div>
            )}
        </div>
    );
};

export default Home;
