import { gql } from 'apollo-boost';

// Queries
const GET_USER_DATA = gql`
{
  accessToken @client
  user @client
}
`;

const GET_USER_ISSUES = gql`
    query getIssues { 
        viewer {
            openIssues: issues(filterBy:{ states: [OPEN]}, last: 100) {
            totalCount
            edges {
                ...IssueDetails
            }
            }
            
            closedIssues: issues(filterBy:{ states: [CLOSED]}, last: 100) {
            totalCount
            edges {
                ...IssueDetails
            }
            }
        }
    }

    fragment IssueDetails on IssueEdge {
        node {  
            id
            title
            bodyHTML
            closed
            number
            createdAt
            author {
                login
            }
            repository {
            nameWithOwner
            url
            }
        }
    }
`;

const GET_ISSUE_DETAIL = gql`
    query($id: ID!) {
    node(id:$id) {
        ... on Issue {
            ...Details
        }
    }
    }

    fragment Details on Issue {
        id
        title
        publishedAt
        author {
            login
            avatarUrl
        }
        repository {
            nameWithOwner
        }
        bodyHTML
        closed
        number
        comments(first: 100) {
            edges {
                node {
                    id
                    author {
                        login
                        avatarUrl
                    }
                    publishedAt
                    body
                }
            }
        }
    }
`;


// Mutations
const LOGIN_USER = gql`
    mutation SetAccessToken($scopes: [String]) {
        setAccessToken(scopes: $scopes) @client
    }
`;

const LOGOUT_USER = gql`
    mutation SignOut {
        signOut @client
    }
`;

const CLOSE_ISSUE = gql`
    mutation CloseIssue($id: ID!) {
        closeIssue(input:{
            issueId: $id
        }) {
            clientMutationId
            issue {
                title
                closed
                closedAt
            }
        }
    }
`;

const REOPEN_ISSUE = gql`
    mutation ReopenIssue($id: ID!) {
        reopenIssue(input:{
            issueId: $id
        }) {
            clientMutationId
            issue {
                title
                closed
                lastEditedAt
            }
        }
    }
`;

export const queries = {
    'GET_USER_DATA': GET_USER_DATA,
    'GET_USER_ISSUES': GET_USER_ISSUES,
    'GET_ISSUE_DETAIL': GET_ISSUE_DETAIL
}

export const mutations = {
    'LOGIN_USER': LOGIN_USER,
    'LOGOUT_USER': LOGOUT_USER,
    'CLOSE_ISSUE': CLOSE_ISSUE,
    'REOPEN_ISSUE': REOPEN_ISSUE
}