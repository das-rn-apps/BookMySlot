import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import React from 'react';

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer>
                <Drawer.Screen
                    name="index"
                    options={{
                        drawerLabel: 'Home',
                        title: 'overview',
                    }}
                />
                <Drawer.Screen
                    name="[id]"
                    options={{
                        drawerLabel: 'User',
                        title: 'overview',
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}
