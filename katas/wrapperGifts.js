function wrapping(gifts) {
    const wrapped = gifts.reduce((currentWrapped, currentGift)=>{
      const paperBasicLength = currentGift.length;

      const giftWrapped = `${getWrapperSide(paperBasicLength)}\n*${currentGift}*\n${getWrapperSide(paperBasicLength)}`
      return [...currentWrapped, giftWrapped]
    }, [])

    return wrapped;
  }

  console.log(wrapping(['cat', 'game', 'socks']))

  function getWrapperSide (length){
    return Array(length + 2).fill('*').join('')
  }

