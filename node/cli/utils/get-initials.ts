const getInitials = (string: string) => {
  let initials = string[0]
  for (let i = 1; i < string.length; i++) {
    const letter = string[i]
    if (letter.toUpperCase() === letter) {
      initials += letter
    }
  }
  return initials.toLowerCase()
}

export default getInitials