export const getProfile = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ pid: '123', name: 'John Doe' })
    }, 1000)
  })
}

export const getSkillsByPid = async (pid: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['JavaScript', 'TypeScript', 'Node.js'])
    }, 1000)
  })
}

export const getProjects = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: '1', name: 'Project 1' },
        { id: '2', name: 'Project 2' },
      ])
    }, 1000)
  })
}

export const runApi = async () => {
  const wrap = () => {
    return new Promise(async (resolve, reject) => {
      const p: any = await getProfile()
      const skills = await getSkillsByPid(p!.pid)
      // setState()
      resolve(skills)
    })
  }
  const result = await Promise.all([wrap(), getProjects()])
  console.log('results', result)

  // Example 2
  //   const p: any = await getProfile()
  //   const skills = await getSkillsByPid(p!.pid)
  //   const projects = await getProjects()

  //   console.log('results', skills, projects)
}
