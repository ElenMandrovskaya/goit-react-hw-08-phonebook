import { UserContainer, UserName, UserEmail, Avatar, LogOutBtn } from "./UserMenu.styled";

export function UserMenu() {
    return (
        <UserContainer>
            <Avatar />
            <UserName>Welcome, Name</UserName>
            <UserEmail>example@gmail.com</UserEmail>
            <LogOutBtn>Log Out</LogOutBtn>
        </UserContainer>
    )
}