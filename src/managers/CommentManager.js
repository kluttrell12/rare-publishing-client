export const saveNewComment = (comment) => {
  return fetch("http://localhost:8000/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Token ${localStorage.getItem('auth_token')}`
    },
    body: JSON.stringify(comment)
  }).then(res => res.json())
}

export const saveEditComment = (id, comment) => {
  return fetch(`http://localhost:8000/comments/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Token ${localStorage.getItem('auth_token')}`
    },
    body: JSON.stringify(comment)
  })
}


export const getCommentsByPostId = (id) => {
  return fetch(`http://localhost:8000/comments?post_id=${id}`, {
    headers: {
      'Authorization': `Token ${localStorage.getItem('auth_token')}`
    }
  }).then(res => res.json())
}

export const getSingleComment = (id) => {
  return fetch(`http://localhost:8000/comments/${id}`, {
    headers: {
      'Authorization': `Token ${localStorage.getItem('auth_token')}`
    }
  }).then(res => res.json())
}

export const deleteComment = (commentId) => {
  return fetch(`http://localhost:8000/comments/${commentId}`, {
    method: "DELETE",
    headers: {
      'Authorization': `Token ${localStorage.getItem('auth_token')}`
    }
  })
}
