const longer = s => s.split(' ').sort().sort((a,b) => a.length - b.length).join(' ');