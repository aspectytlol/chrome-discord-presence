const token = localStorage.getItem('NTM4NzMwMjU4MzU5MjU1MDUw.YOem5Q.gLZBQZTOxgxVzhBOyMYNL7HMn60')

if (token && token !== null) {
  chrome.storage.local.set({ token }, function() {
    alert('Token of your Discord account is ready. This token will used until expired.')
  })
}
