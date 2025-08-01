'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[9568],
	{
		6476: (e, t, r) => {
			r.d(t, { A: () => k })
			var i = r(2860),
				n = r(55729),
				a = r(20696),
				o = r(64104),
				l = r(21338),
				s = r(53623),
				d = r(654),
				p = r(9381),
				c = r(81263),
				g = r(13203),
				u = r(19946),
				x = r(39255),
				h = r(60696),
				m = r(63657)
			let v = { damping: 11, stiffness: 150 },
				f = (0, a.A)('div', { target: 'ewdjayq0' })(
					'display:flex;justify-content:center;align-items:center;flex-direction:column;'
				),
				b = (0, a.A)('div', { target: 'ewdjayq1' })(
					'height:80px;',
					g.j5.m,
					'{height:60px;}'
				),
				w = (0, a.A)(d.m.create(x.A), { target: 'ewdjayq2' })(
					'align-items:center;background-color:var(--white);border-radius:100px;display:flex;gap:12px;justify-content:space-between;padding:12px 24px 12px 12px;',
					g.j5.m,
					'{padding:10px 20px 10px 10px;gap:10px;}'
				),
				j = (0, a.A)(m.A, { target: 'ewdjayq3' })(
					'width:56px;height:56px;',
					g.j5.m,
					'{width:40px;height:40px;}'
				),
				A = (0, a.A)(o.In, { target: 'ewdjayq4' })(
					'width:47px;margin-left:16px;color:var(--purple);',
					g.j5.m,
					'{width:30px;margin-left:8px;}'
				),
				y = (0, a.A)(x.A, { target: 'ewdjayq5' })(
					'display:flex;flex-wrap:wrap;margin-top:16px;opacity:0.6;gap:8px;width:208px;text-align:center;justify-content:center;'
				),
				k = e => {
					let {
							items: t,
							underText: r,
							buttonLabel: a,
							className: o,
							onMouseEnter: d,
							onMouseLeave: g,
						} = e,
						{ browserType: x, osType: m } = (0, u.A)(),
						k = 'Android' === m || 'iOS' === m,
						X = t.find(e =>
							k
								? (null == e ? void 0 : e.title) === m
								: (null == e ? void 0 : e.title) === x
						),
						Y = (0, n.useRef)(null),
						{ ref: L, width: z = 0, height: C = 0 } = (0, p.A)(),
						F = z / 2,
						D = C / 2,
						S = (0, l.d)(0),
						I = (0, l.d)(0),
						M = (0, s.z)(S, v),
						P = (0, s.z)(I, v),
						q = (0, n.useCallback)(
							e => {
								;(Y.current = e), L(e)
							},
							[L]
						),
						E = (0, n.useCallback)(
							e => {
								let { x: t, y: r } = Y.current.getBoundingClientRect(),
									i = t + F,
									n = r + D,
									a = e.clientX,
									o = e.clientY
								S.set((0, c.Tj)(a - i, [-F, F], [-10, 10])),
									I.set((0, c.Tj)(o - n, [-D, D], [-10, 10]))
							},
							[F, D, S, I]
						),
						R = (0, n.useCallback)(
							e => {
								null == d || d(e)
							},
							[d]
						),
						H = (0, n.useCallback)(
							e => {
								S.set(0), I.set(0), null == g || g(e)
							},
							[S, I, g]
						)
					return (0, i.FD)(f, {
						className: o,
						children: [
							(0, i.Y)(b, {
								children:
									x && m
										? (0, i.Y)(w, {
												ref: q,
												href: 'login.html',
												className: o,
												onMouseEnter: R,
												onMouseMove: E,
												onMouseLeave: H,
												style: { x: M, y: P },
												children: X
													? (0, i.FD)(i.FK, {
															children: [
																(0, i.Y)(j, {
																	image: X.image,
																	sizes: { mobile: '40px', desktop: '56px' },
																}),
																(0, i.FD)(h.EY, {
																	size: 'm',
																	as: 'span',
																	children: 'Web Wallet',
																}),
															],
													  })
													: (0, i.FD)(i.FK, {
															children: [
																(0, i.Y)(A, { type: 'logo' }),
																(0, i.Y)(h.EY, {
																	size: 'm',
																	as: 'span',
																	children: 'Web Wallet',
																}),
															],
													  }),
										  })
										: null,
							}),
							(0, i.Y)(y, {
								href: 'login.html',
								children: (0, i.FD)(h.vw, {
									children: [
										r,
										' ',
										(0, i.Y)('span', {
											className: 'underline',
											children: 'Web Wallet',
										}),
									],
								}),
							}),
						],
					})
				}
		},
		7508: (e, t, r) => {
			r.d(t, { A: () => g })
			var i = r(2860),
				n = r(20696),
				a = r(13203),
				o = r(54253),
				l = r(43617),
				s = r(74984)
			let d = (0, n.A)('section', { target: 'e18bvroa0' })(
					'position:relative;z-index:',
					e => {
						let { zIndex: t } = e
						return t
					},
					';display:flex;justify-content:center;align-items:center;flex-direction:column;width:100%;padding:var(--spacingXL) 0;',
					a.j5.xl,
					'{padding:var(--spacingS) 0 var(--spacingL);}',
					a.j5.m,
					'{padding-top:var(--spacingL);}'
				),
				p = (0, n.A)(s.e, { target: 'e18bvroa1' })(
					'display:flex;margin:0 auto 24px;',
					a.j5.m,
					'{margin-bottom:16px;}'
				),
				c = (0, n.A)(s.e, { target: 'e18bvroa2' })(
					'grid-row-gap:32px;',
					a.j5.m,
					'{grid-row-gap:24px;}',
					a.j5.s,
					'{grid-row-gap:16px;}'
				),
				g = e => {
					let { chip: t, cards: r, zIndex: n } = e
					return (0, i.FD)(d, {
						zIndex: n,
						children: [
							t && (0, i.Y)(p, { children: (0, i.Y)(l.A, { as: 'h3', ...t }) }),
							(0, i.Y)(c, {
								as: 'ul',
								children: (0, i.Y)(o.A, {
									cards: r,
									flow: !1,
									noAnimationInView: !0,
								}),
							}),
						],
					})
				}
		},
		11320: (e, t, r) => {
			r.d(t, { A: () => g })
			var i = r(2860),
				n = r(20696),
				a = r(64104),
				o = r(13203),
				l = r(60696)
			let s = (0, n.A)('div', { target: 'egkpgrl0' })(
					'display:flex;align-items:center;justify-content:center;gap:8px;height:33px;padding:',
					e => {
						let { hasActiveFilters: t } = e
						return t ? '0px 8px 0px 16px' : '0px 16px'
					},
					';',
					o.j5.m,
					'{height:31px;padding:',
					e => {
						let { hasActiveFilters: t } = e
						return t ? '0px 4px 0px 8px' : '0px 8px'
					},
					';}'
				),
				d = (0, n.A)('button', { target: 'egkpgrl1' })(
					'position:relative;display:flex;align-items:center;justify-content:center;gap:4px;width:32px;height:32px;padding:4px 8px;background-color:var(--purple);border-radius:50%;color:var(--white);transform:scale(1);transition:transform 0.2s ease-in,background-color 0.2s ease-in;@media (hover:hover){&:hover{background-color:var(--black);transform:scale(0.985);}}',
					o.j5.m,
					'{width:auto;height:23px;border-radius:32px;}'
				),
				p = (0, n.A)(l.vw, { target: 'egkpgrl2' })(
					o.fc.m,
					'{position:absolute;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px);}'
				),
				c = (0, n.A)(a.In, { target: 'egkpgrl3' })(
					'width:16px;height:auto;',
					o.j5.m,
					'{width:14px;}'
				),
				g = e => {
					let { activeCount: t, clearFilters: r } = e,
						n = t > 0
					return (0, i.FD)(s, {
						hasActiveFilters: n,
						children: [
							(0, i.Y)(c, { type: 'filter' }),
							(0, i.FD)(l.vw, {
								children: ['Filters ', n && '('.concat(t, ')')],
							}),
							n &&
								(0, i.FD)(d, {
									onClick: r,
									children: [
										(0, i.Y)(c, { type: 'xCircle' }),
										(0, i.Y)(p, { children: 'Clear' }),
									],
								}),
						],
					})
				}
		},
		12072: (e, t, r) => {
			r.d(t, { A: () => c })
			var i = r(2860),
				n = r(20696),
				a = r(13203),
				o = r(54253),
				l = r(71942),
				s = r(74984)
			let d = (0, n.A)('section', { target: 'en3vus30' })(
					'position:relative;z-index:',
					e => {
						let { zIndex: t } = e
						return t
					},
					';display:flex;justify-content:center;align-items:center;flex-direction:column;width:100%;padding:',
					e => {
						let { isHero: t } = e
						return t
							? 'calc(var(--spacingXXXL) * 2) 0 var(--spacingXXL)'
							: 'var(--spacingXXL) 0'
					},
					';',
					a.j5.xl,
					'{padding-top:',
					e => {
						let { isHero: t } = e
						return !t && 'var(--spacingL)'
					},
					';}',
					a.j5.m,
					'{padding-top:',
					e => {
						let { isHero: t } = e
						return t && 'calc(var(--spacingXXXL) + var(--spacingXS))'
					},
					';padding-bottom:var(--spacingL);}'
				),
				p = (0, n.A)(s.e, { target: 'en3vus31' })(
					'grid-row-gap:32px;',
					a.j5.m,
					'{grid-row-gap:24px;}',
					a.j5.s,
					'{grid-row-gap:16px;}'
				),
				c = e => {
					let { intro: t, cards: r, zIndex: n, isHero: a } = e
					return (0, i.FD)(d, {
						zIndex: n,
						isHero: a,
						children: [
							(0, i.Y)(l.A, { intro: t, isHero: a }),
							(0, i.Y)(p, {
								as: 'ul',
								children: (0, i.Y)(o.A, {
									cards: r,
									noAnimationInView: !0,
									flow: !1,
								}),
							}),
						],
					})
				}
		},
		19946: (e, t, r) => {
			r.d(t, { A: () => d })
			var i = r(55729),
				n = r(83872),
				a = r(31005),
				o = r.n(a)
			let l = (0, n.eU)({ browser: { name: '' }, os: { name: '' } }),
				s = (0, n.eU)(!1),
				d = () => {
					let [e, t] = (0, n.fp)(l),
						[r, a] = (0, n.fp)(s)
					;(0, i.useEffect)(() => {
						if (!e.os.name && !e.browser.name) {
							let e = window.navigator,
								r = new (o())(e.userAgent)
							a(void 0 != e.brave && e.brave.isBrave()), t(r.getResult())
						}
					}, [e, a, t])
					let d = e && e.browser,
						p = e && e.os && e.os.name
					return {
						browserType: d && r ? 'Brave' : d ? e.browser.name : '',
						osType: p ? e.os.name : '',
					}
				}
		},
		69568: (e, t, r) => {
			r.d(t, { A: () => ty })
			var i = r(2860),
				n = r(94707),
				a = r(20696),
				o = r(13203),
				l = r(71942),
				s = r(55729),
				d = r(25675),
				p = r(57029),
				c = r(70508),
				g = r(80229),
				u = r(654),
				x = r(74984),
				h = r(60696),
				m = r(9381),
				v = r(63657),
				f = r(66260),
				b = r(37612),
				w = r(21338),
				j = r(81263)
			let A = function () {
				let e =
						arguments.length > 0 && void 0 !== arguments[0]
							? arguments[0]
							: 0.15,
					t = (0, s.useRef)(null)
				return [
					r => {
						var i
						let n = (0, j.Cc)(
							null !== (i = t.current) && void 0 !== i ? i : r,
							r,
							e
						)
						return (
							(t.current = n), 5e-4 > (0, j.Ui)(r, n) ? r : (0, j.LI)(n, 1e4)
						)
					},
					() => {
						t.current = null
					},
				]
			}
			var y = r(59620)
			let k = (0, a.A)(u.m.li, { target: 'e1f1wgog0' })(
					'position:absolute;overflow:hidden;box-shadow:0px 0px 4px var(--themeCardShadow);opacity:',
					e => {
						let { isHidden: t } = e
						return +!t
					},
					';will-change:',
					e => {
						let { isAnimating: t } = e
						return t ? 'transform' : 'auto'
					},
					';',
					o.j5.l,
					'{position:relative;}'
				),
				X = e => {
					let {
							className: t,
							children: r,
							scrollYProgress: n,
							angle: a,
							delay: l,
							duration: p,
							bounds: g,
							isAnimating: u,
						} = e,
						x = (0, s.useRef)(),
						[h, m] = A(),
						[v, X] = A(),
						[Y, L] = A(),
						z = { x: g.width / 2, y: g.height / 2 },
						C = (0, j.R_)(a, { x: 120, y: 120 }),
						F = (0, j.R_)(a, z),
						D = (0, w.d)(0),
						S = (0, w.d)(0),
						I = (0, w.d)(0),
						[M, P] = (0, f.A)(() => {
							let e = n.get(),
								t = h((0, j.pd)(e, [l, l + p], [C.x, F.x])),
								r = v((0, j.pd)(e, [l, l + p], [C.y, F.y])),
								i = Y((0, j.pd)(e, [l, l + p], [0.85, 1]))
							D.set(t), S.set(r), I.set(i)
						}),
						q = (0, s.useCallback)(() => {
							m(), X(), L()
						}, [m, X, L]),
						E = (0, b.A)(u)
					;(0, s.useEffect)(() => {
						if (E !== u) {
							if (u) P()
							else {
								M()
								let { scrollTop: e } = (0, j.qM)(),
									{ top: t } = (0, j.$R)(x.current)
								q(),
									e > t
										? (D.set(F.x), S.set(F.y), I.set(1))
										: (D.set(C.x), S.set(C.y), I.set(0.85))
							}
						}
					}, [u, E, D, S, I, F, C, q, M, P])
					let R = (0, y.A)(),
						H = (0, d.A)('(max-width: '.concat(o.LO.l, 'px)'), !1),
						B = (0, c.W)(x, { amount: 0.25, once: !0 })
					return (0, i.Y)(k, {
						className: t,
						ref: x,
						animate: H ? { opacity: +!!B, y: 15 * !B } : {},
						style: H ? {} : { x: D, y: S, scale: I },
						transition: { duration: 0.5 },
						isHidden: !R,
						isAnimating: u,
						children: r,
					})
				},
				Y = (0, a.A)(X, { target: 'emmc3700' })(
					'border-radius:24px;max-width:385px;overflow:hidden;img{width:100%;max-width:385px;height:auto;',
					o.fc.l,
					'{max-height:300px;}}',
					o.j5.l,
					'{width:385px;max-width:100%;}'
				),
				L = (0, a.A)(X, { target: 'e17uh9pe0' })(
					'padding:16px;background-color:var(--grey);color:var(--midnightPurple);border-radius:16px;overflow:hidden;'
				),
				z = (0, a.A)(h.hE, { target: 'e17uh9pe1' })(
					'display:flex;align-items:flex-start;'
				),
				C = (0, a.A)(h.vw, { target: 'e17uh9pe2' })(
					'color:',
					e => {
						let { isPlus: t } = e
						return t ? 'var(--green)' : 'var(--red)'
					},
					';'
				),
				F = (0, a.A)(X, { target: 'e129fliq0' })(
					'display:flex;flex-direction:column;gap:16px;max-width:277px;padding:24px 24px 48px;border-radius:24px;background-color:',
					e => {
						let { bgColor: t } = e
						return t ? 'var(--'.concat(t, ')') : 'var(--white)'
					},
					';color:',
					e => {
						let { bgColor: t } = e
						return 'blue' === t ? 'var(--white)' : 'var(--midnightPurple)'
					},
					';'
				),
				D = {
					milestoneItemText: e => {
						let {
							className: t,
							title: r,
							text: n,
							bgColor: a,
							animationProps: o,
						} = e
						return (0, i.FD)(F, {
							className: t,
							bgColor: a,
							...o,
							children: [
								(0, i.Y)(h.Pd, { size: 'm', children: r }),
								(0, i.Y)(h.EY, { size: 's', children: n }),
							],
						})
					},
					milestoneItemStats: e => {
						let {
								className: t,
								label: r,
								value: n,
								percentage: a,
								animationProps: o,
							} = e,
							l = a >= 0
						return (0, i.FD)(L, {
							className: t,
							...o,
							children: [
								(0, i.Y)(h.EY, { size: 's', as: 'h4', children: r }),
								(0, i.FD)(z, {
									size: 's',
									as: 'p',
									children: [
										''.concat(n).concat(a ? ' ' : ''),
										a &&
											(0, i.Y)(C, {
												as: 'sup',
												isPlus: l,
												children: ''.concat(l ? '+' : '').concat(a, '%'),
											}),
									],
								}),
							],
						})
					},
					milestoneItemImage: e => {
						let { className: t, image: r, animationProps: n } = e
						return (0, i.Y)(Y, {
							className: t,
							...n,
							children: (0, i.Y)(v.A, {
								image: r,
								sizes: { mobile: '80vw', tablet: '37vw', desktop: '25vw' },
							}),
						})
					},
				},
				S = e => {
					let t = D[e]
					return e && !t
						? (console.error(
								'Component not found. Check getMilestoneComponent and make sure that the schema type "'.concat(
									e,
									'" is mapped to a corresponding React Component.'
								)
						  ),
						  n.A)
						: t
				},
				I = (0, a.A)('ul', { target: 'esuo82w0' })(
					'position:absolute;inset:0;display:flex;align-items:center;justify-content:center;',
					o.j5.l,
					'{position:relative;flex-direction:column;gap:16px;width:100%;}'
				),
				M = e => {
					let { scrollYProgress: t, milestones: r } = e,
						n = (0, s.useRef)(),
						a = (0, c.W)(n),
						{ ref: o, width: l = 0, height: d = 0 } = (0, m.A)(),
						p = { width: l, height: d },
						g = (0, s.useCallback)(
							e => {
								;(n.current = e), o(e)
							},
							[o]
						)
					return r
						? (0, i.Y)(I, {
								ref: g,
								children: r.map((e, n) => {
									let o = 0.15 * (r.length - 1 - n),
										l = 1 - 0.15 * (r.length - 1),
										s = (2 * Math.PI) / r.length,
										d = s * n,
										c = S(e._type)
									return (0, i.Y)(
										c,
										{
											...e,
											animationProps: {
												scrollYProgress: t,
												delay: o,
												duration: l,
												angle: d + (s * (n + 1) - d) / 2,
												bounds: p,
												isAnimating: a,
											},
										},
										e._key
									)
								}),
						  })
						: null
				},
				P = (0, a.A)('div', { target: 'e1bqoucc0' })(
					'width:100%;height:100vh;',
					o.j5.l,
					'{height:auto;}'
				),
				q = (0, a.A)(x.e, { target: 'e1bqoucc1' })(
					'position:relative;overflow:hidden;height:100%;padding-top:var(--spacingXXXL);padding-bottom:var(--spacingXXXL);',
					o.j5.l,
					'{height:auto;padding-top:0;padding-bottom:var(--spacingL);}'
				),
				E = (0, a.A)(x.VP, { target: 'e1bqoucc2' })(
					'position:relative;display:flex;align-items:center;justify-content:center;flex-direction:column;height:100%;'
				),
				R = (0, a.A)(u.m.div, { target: 'e1bqoucc3' })(
					'position:absolute;',
					o.j5.l,
					'{position:relative;padding-bottom:var(--spacingL);}'
				),
				H = e => {
					let { title: t, milestones: r } = e,
						n = (0, s.useRef)(null),
						{ scrollYProgress: a } = (0, p.L)({
							target: n,
							offset: ['start 70vh', 'end end'],
						}),
						l = (0, s.useRef)(null),
						u = (0, d.A)('(max-width: '.concat(o.LO.l, 'px)'), !1),
						x = (0, c.W)(l, { amount: 0.25, once: !0 }),
						m = (0, g.G)(a, [0, 1], [1, 1.2]),
						v = (0, g.G)(a, [0, 1], [0, 1])
					return r
						? (0, i.Y)(P, {
								ref: n,
								children: (0, i.Y)(q, {
									children: (0, i.FD)(E, {
										start: { mobile: 2, tablet: 2, desktop: 3 },
										span: { mobile: 4, tablet: 6, desktop: 8 },
										children: [
											(0, i.Y)(R, {
												ref: l,
												animate: u ? { opacity: +!!x, y: 15 * !x } : {},
												style: u ? {} : { scale: m, opacity: v },
												children: (0, i.Y)(h.Pd, {
													size: 'm',
													as: 'h3',
													children: t,
												}),
											}),
											(0, i.Y)(M, { milestones: r, scrollYProgress: a }),
										],
									}),
								}),
						  })
						: null
				},
				B = (0, a.A)('section', { target: 'el1d0ck0' })(
					'z-index:',
					e => {
						let { zIndex: t } = e
						return t
					},
					';position:relative;padding:',
					e => {
						let { isHero: t } = e
						return t
							? 'calc(var(--spacingXXXL) * 2) 0 var(--spacingXXL)'
							: 'var(--spacingXXL) 0'
					},
					';',
					o.j5.xl,
					'{padding-top:',
					e => {
						let { isHero: t } = e
						return !t && 'var(--spacingL)'
					},
					';}',
					o.j5.m,
					'{padding-top:',
					e => {
						let { isHero: t } = e
						return t && 'calc(var(--spacingXXXL) + var(--spacingXS))'
					},
					';padding-bottom:var(--spacingL);}'
				)
			var V = r(25545)
			let N = (0, a.A)('section', { target: 'ef75k3h0' })(
				'position:relative;z-index:',
				e => {
					let { zIndex: t } = e
					return t
				},
				';display:flex;justify-content:center;align-items:center;flex-direction:column;width:100%;padding:',
				e => {
					let { isHero: t } = e
					return t
						? 'calc(var(--spacingXXXL) * 2) 0 var(--spacingXXL)'
						: 'var(--spacingXXL) 0'
				},
				';',
				o.j5.xl,
				'{padding-top:',
				e => {
					let { isHero: t } = e
					return !t && 'var(--spacingL)'
				},
				';}',
				o.j5.m,
				'{padding-top:',
				e => {
					let { isHero: t } = e
					return t && 'calc(var(--spacingXXXL) + var(--spacingXS))'
				},
				';padding-bottom:var(--spacingL);}'
			)
			var O = r(11583)
			let T = (0, a.A)('section', { target: 'e2jimzh0' })(
					'position:relative;z-index:',
					e => {
						let { zIndex: t } = e
						return t
					},
					';display:flex;justify-content:center;align-items:center;flex-direction:column;width:100%;padding:',
					e => {
						let { isHero: t } = e
						return t
							? 'calc(var(--spacingXXL) * 2) 0 var(--spacingXL)'
							: 'var(--spacingXL) 0'
					},
					';',
					o.j5.xl,
					'{padding-top:',
					e => {
						let { isHero: t } = e
						return !t && 'var(--spacingM)'
					},
					';}',
					o.j5.m,
					'{padding-top:',
					e => {
						let { isHero: t } = e
						return t && 'calc(var(--spacingXXL) + var(--spacingS))'
					},
					';padding-bottom:var(--spacingL);}'
				),
				_ = (0, a.A)('section', { target: 'efs5idt0' })(
					'position:relative;z-index:',
					e => {
						let { zIndex: t } = e
						return t
					},
					';display:flex;justify-content:center;align-items:center;flex-direction:column;width:100%;padding:',
					e => {
						let { isHero: t } = e
						return t
							? 'calc(var(--spacingXXL) * 2) 0 var(--spacingXL)'
							: 'var(--spacingXL) 0'
					},
					';',
					o.j5.xl,
					'{padding-top:',
					e => {
						let { isHero: t } = e
						return !t && 'var(--spacingM)'
					},
					';}',
					o.j5.m,
					'{padding-top:',
					e => {
						let { isHero: t } = e
						return t && 'calc(var(--spacingXXL) + var(--spacingS))'
					},
					';padding-bottom:var(--spacingL);}'
				)
			var W = r(7508),
				G = r(92425),
				K = r(54253),
				J = r(21178)
			let U = (0, a.A)('section', { target: 'e16os7430' })(
				'position:relative;z-index:',
				e => {
					let { zIndex: t } = e
					return t
				},
				';display:flex;justify-content:center;align-items:center;flex-direction:column;width:100%;padding:',
				e => {
					let { isHero: t } = e
					return t
						? 'calc(var(--spacingXXXL) * 2) 0 var(--spacingXXL)'
						: 'var(--spacingXXL) 0'
				},
				';',
				o.j5.xl,
				'{padding-top:',
				e => {
					let { isHero: t } = e
					return !t && 'var(--spacingL)'
				},
				';}',
				o.j5.m,
				'{padding-top:',
				e => {
					let { isHero: t } = e
					return t && 'calc(var(--spacingXXXL) + var(--spacingXS))'
				},
				';padding-bottom:var(--spacingL);}'
			)
			var Q = r(12072),
				$ = r(20133),
				Z = r(54885),
				ee = r(6476),
				et = r(37989)
			let er = {
					initial: { opacity: 0 },
					animate: { opacity: 0.6 },
					exit: { opacity: 0 },
				},
				ei = (0, a.A)('div', { target: 'e103w7wh0' })(
					'position:relative;height:29px;margin-bottom:16px;',
					o.j5.xl,
					'{height:24px;}',
					o.j5.m,
					'{height:17px;}'
				),
				en = (0, a.A)(u.m.create(h.Pd), { target: 'e103w7wh1' })(
					'position:absolute;left:0;right:0;bottom:0;opacity:0.6;'
				),
				ea = e => {
					let { subtitles: t } = e,
						r = t.length > 1,
						n = (0, s.useRef)(null),
						[a, o] = (0, s.useState)(0)
					return (
						(0, s.useEffect)(() => {
							if (r)
								return (
									(n.current = setInterval(() => {
										o(e => (e + 1) % t.length)
									}, 4e3)),
									() => {
										clearInterval(n.current)
									}
								)
						}, [r, t]),
						(0, i.Y)(ei, {
							...(r ? { 'aria-live': 'polite', 'aria-atomic': 'true' } : {}),
							children: (0, i.Y)(et.N, {
								mode: 'wait',
								children: t.map((e, t) =>
									a === t
										? (0, i.Y)(
												en,
												{
													variants: er,
													initial: 'initial',
													animate: 'animate',
													exit: 'exit',
													transition: { duration: 0.2 },
													as: 'h3',
													size: 's',
													align: 'center',
													children: e,
												},
												t
										  )
										: null
								),
							}),
						})
					)
				}
			var eo = r(58424)
			let el = (0, a.A)('section', { target: 'e11sw9k40' })(
					'display:flex;align-items:center;min-height:100vh;padding:var(--spacingXXXL) 0;'
				),
				es = (0, a.A)('div', { target: 'e11sw9k41' })(
					'display:flex;justify-content:center;margin-top:96px;',
					o.j5.m,
					'{margin-top:48px;}'
				)
			var ed = r(81278),
				ep = r(64104),
				ec = r(97453),
				eg = r(12307),
				eu = r(79320),
				ex = r(65649),
				eh = r(17965),
				em = r(11320),
				ev = r(76052)
			let ef = (0, a.A)('div', { target: 'estj8jd0' })(
					'padding:var(--spacingL) 0 var(--spacingM);z-index:2;',
					o.j5.xl,
					'{padding-bottom:var(--spacingXL);}',
					o.j5.xl,
					'{padding-bottom:var(--spacingL);}',
					o.j5.s,
					'{position:sticky;top:0;z-index:9;padding:0;&:before{content:"";position:absolute;top:-4px;height:4px;width:100%;background-color:var(--themeBgColor);z-index:2;}}'
				),
				eb = (0, a.A)((0, u.m)(x.e), { target: 'estj8jd1' })(
					'position:relative;z-index:11;',
					o.j5.s,
					'{height:63px;grid-row-gap:24px;overflow:hidden;background-color:var(--themeBgColor);box-shadow:',
					e => {
						let { isSticky: t } = e
						return t
							? '0px 0px 4px var(--themeFilterShadow)'
							: '0px 0px 0px var(--themeFilterShadow)'
					},
					';border-radius:0px 0px 20px 20px;transition:box-shadow 0.2s ease;}'
				),
				ew = (0, a.A)('button', { target: 'estj8jd2' })(
					'display:flex;align-items:center;justify-content:center;gap:4px;height:30px;padding:',
					e => {
						let { isOpen: t } = e
						return t ? '8px 8px 8px 12px' : '8px'
					},
					';color:var(--black);background-color:var(--light3);border-radius:32px;',
					o.fc.s,
					'{display:none;}'
				),
				ej = (0, a.A)('span', { target: 'estj8jd3' })(
					'position:absolute;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px);'
				),
				eA = (0, a.A)(ep.In, { target: 'estj8jd4' })(
					'width:16px;height:auto;transform:',
					e => {
						let { rotate: t } = e
						return t && 'rotate('.concat(t, 'deg)')
					},
					';transition:0.2s ease-in;',
					o.j5.m,
					'{width:14px;}'
				),
				ey = (0, a.A)(x.VP, { target: 'estj8jd5' })(
					'display:flex;justify-content:space-between;',
					o.j5.s,
					'{padding-top:16px;padding-bottom:16px;}'
				),
				ek = (0, a.A)('div', { target: 'estj8jd6' })(
					'border-radius:100px;color:var(--black);background-color:var(--themeCarouselBarBgColor);font-size:28px;padding:8px 4px;',
					o.j5.m,
					'{padding:0px;}'
				),
				eX = (0, a.A)(x.VP, { target: 'estj8jd7' })(
					'display:flex;flex-direction:column;align-items:flex-start;gap:16px;',
					o.j5.m,
					'{padding-bottom:16px;}'
				),
				eY = e => {
					let { filters: t, activeCount: r } = e,
						{ pathname: n, query: a, push: l } = (0, ed.useRouter)(),
						[p, c] = (0, s.useState)(!1),
						g = 'Points Boost',
						u = (0, d.A)('(max-width: '.concat(o.LO.s, 'px)'), !0),
						[x, { top: m }] = (0, eh.A)(),
						{ y: v } = (0, eu.A)(),
						f = t
							.filter(e => {
								let { tag: t } = e
								return t === g
							})
							.map(e => {
								let { icon: t, ...r } = e
								return r
							}),
						b = t.filter(e => {
							let { _type: t, tag: r } = e
							return 'tagDefault' === t && r !== g
						}),
						w = e => {
							let t = { ...a }
							Object.entries(e).forEach(e => {
								let [r, i] = e,
									n = (0, eg.B)(a, { [r]: i })
								t = (0, eg.M)(t, r, i, n)
							}),
								l({ href: n, query: t }, null, { scroll: !1 })
						}
					return (0, i.FD)(i.FK, {
						children: [
							(0, i.Y)('div', { ref: x }),
							(0, i.Y)(ef, {
								children: (0, i.FD)(eb, {
									transition: { duration: 0.75 * !!u, ease: ex.qw },
									isSticky: v > m,
									animate: { height: !u || p ? 'auto' : '63px' },
									id: 'DAppFilters',
									children: [
										(0, i.FD)(ey, {
											align: 'flex-start',
											start: { mobile: 1, tablet: 1, desktop: 1 },
											span: { mobile: 6, tablet: 2, desktop: 4 },
											children: [
												(0, i.Y)(ek, {
													children: (0, i.Y)(em.A, {
														activeCount: r,
														clearFilters: () => {
															l(
																{
																	href: n,
																	query: Object.fromEntries(
																		Object.entries(a).filter(e => {
																			let [t] = e
																			return 'tag' !== t
																		})
																	),
																},
																null,
																{ scroll: !1 }
															)
														},
													}),
												}),
												(0, i.FD)(ew, {
													'aria-controls': 'dApp-filters',
													'aria-expanded': p ? 'true' : 'false',
													isOpen: p,
													onClick: () => c(e => !e),
													children: [
														p && (0, i.Y)(h.vw, { children: 'Apply filters' }),
														!p && (0, i.Y)(ej, { children: 'Show filters' }),
														(0, i.Y)(eA, {
															type: 'chevronDown',
															rotate: p ? -180 : 0,
														}),
													],
												}),
											],
										}),
										(0, i.FD)(eX, {
											align: 'flex-start',
											start: { mobile: 1, tablet: 4, desktop: 7 },
											span: { mobile: 6, tablet: 7, desktop: 8 },
											children: [
												(0, i.Y)(ev.A, { tags: f, onClickTag: w }),
												(0, i.Y)(ev.A, { tags: b, onClickTag: w }),
											],
										}),
									],
								}),
							}),
						],
					})
				},
				eL = (0, a.A)('section', { target: 'e189qd6y0' })(
					'position:relative;z-index:',
					e => {
						let { zIndex: t } = e
						return t
					},
					';display:flex;justify-content:center;flex-direction:column;width:100%;padding:var(--spacingXL) 0;',
					o.j5.xl,
					'{padding:var(--spacingS) 0 var(--spacingL);}',
					o.j5.m,
					'{padding-top:var(--spacingL);}'
				),
				ez = (0, a.A)(x.e, { target: 'e189qd6y1' })(
					'grid-row-gap:32px;padding-top:16px;padding-bottom:16px;z-index:2;',
					o.j5.m,
					'{grid-row-gap:24px;}',
					o.j5.s,
					'{grid-row-gap:16px;}'
				),
				eC = (0, a.A)('div', { target: 'e189qd6y2' })(
					'display:flex;justify-content:center;align-items:center;flex-direction:column;width:100%;padding:var(--spacingXL) 0;z-index:2;'
				),
				eF = (0, a.A)('button', { target: 'e189qd6y3' })(
					'flex-direction:row;text-decoration:none;color:var(--dark9);font-size:28px;display:inline-flex;&:hover{span{transform:translateY(10px);}}'
				),
				eD = (0, a.A)('span', { target: 'e189qd6y4' })(
					'padding:0 8px;font-size:18px;transition:transform 0.2s ease-in-out;transform:translateY(0px);'
				)
			var eS = r(49091)
			let eI = {
					block: { normal: O.w.block.normal },
					list: { bullet: O.w.list.bullet, number: O.w.list.number },
					marks: {
						link: O.w.marks.link,
						em: O.w.marks.em,
						strong: O.w.marks.strong,
						color: O.w.marks.color,
					},
				},
				eM = e => {
					let { content: t } = e
					return (0, i.Y)(eS.RK, { value: t, components: eI })
				},
				eP = (0, a.A)('section', { target: 'e89s1li0' })(
					'z-index:',
					e => {
						let { zIndex: t } = e
						return t
					},
					';position:relative;display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:center;width:100%;padding:',
					e => {
						let { isHero: t } = e
						return t
							? 'calc(var(--spacingXXXL) * 2) 0 var(--spacingXXL)'
							: 'var(--spacingXXL) 0'
					},
					';',
					o.j5.xl,
					'{padding-top:',
					e => {
						let { isHero: t } = e
						return !t && 'var(--spacingL)'
					},
					';}',
					o.j5.m,
					'{padding-top:',
					e => {
						let { isHero: t } = e
						return t && 'calc(var(--spacingXXXL) + var(--spacingXS))'
					},
					';padding-bottom:var(--spacingL);}'
				)
			var eq = r(22764),
				eE = r(70026),
				eR = r(11938)
			let eH = (0, a.A)(
					e => {
						let {
							children: t,
							className: r,
							href: n,
							type: a,
							onFocus: o,
							onClick: l,
							onMouseEnter: s,
							onClickCapture: d,
						} = e
						return eE.Fr || 'extension' === a
							? (0, i.Y)(eR.A, {
									className: r,
									href: n,
									onMouseEnter: s,
									onClickCapture: d,
									onFocus: o,
									children: t,
							  })
							: (0, i.Y)('button', {
									onClick: l,
									className: r,
									onMouseEnter: s,
									onClickCapture: d,
									onFocus: o,
									children: t,
							  })
					},
					{ target: 'e2a2oua0' }
				)(
					'aspect-ratio:1;width:calc(100% / 2 - ',
					o.wT.desktop / 2,
					'px);> div{position:relative;display:flex;justify-content:center;align-items:center;flex-direction:column;width:100%;height:100%;background-color:var(--white);box-shadow:0px 0px 4px var(--themeCardShadow);border-radius:24px;transition:border-radius 0.3s ease;}@media (hover:hover){&:hover,&.focus-visible,&:focus-visible{> div{border-radius:200px;}}}',
					o.j5.xl,
					'{width:calc(100% / 2 - ',
					o.wT.tablet / 2,
					'px);}',
					o.j5.m,
					'{width:calc(100% / 2 - ',
					o.wT.mobile / 2,
					'px);}',
					o.j5.s,
					'{> div{border-radius:16px;}}'
				),
				eB = (0, a.A)(v.A, { target: 'e2a2oua1' })(
					'width:120px;',
					o.j5.xl,
					'{width:80px;}',
					o.j5.s,
					'{width:64px;}'
				),
				eV = (0, a.A)(h.EY, { target: 'e2a2oua2' })(
					'position:absolute;bottom:32px;padding:4px 16px;margin-top:16px;text-align:center;color:var(--midnightPurple);background-color:var(--lilac);border-radius:32px;',
					o.j5.xl,
					'{bottom:24px;}',
					o.j5.s,
					'{bottom:16px;}'
				),
				eN = e => {
					let {
							url: t,
							title: r,
							type: n,
							image: a,
							onMouseOver: o,
							onOpenModal: l,
						} = e,
						s = (0, eq.sj)({ product: n, platform: r.toLowerCase() })
					return (0, i.Y)(eH, {
						type: n,
						href: t,
						onMouseEnter: o,
						onFocus: o,
						onClick: () => {
							l(t)
						},
						onClickCapture: s,
						className: 'custom-focus',
						children: (0, i.FD)('div', {
							children: [
								(0, i.Y)(eB, {
									image: a,
									sizes: { desktop: '120px', mobile: '64px', tablet: '80px' },
								}),
								(0, i.Y)(eV, { size: 's', children: r }),
							],
						}),
					})
				}
			var eO = r(83004),
				eT = r(45428)
			let e_ = (0, a.A)(x.VP, { target: 'e51ywz60' })(
					'position:relative;background-color:var(--white);border-radius:24px;box-shadow:0px 0px 4px var(--themeCardShadow);aspect-ratio:',
					e => {
						let { isExtension: t } = e
						return t ? '0.82' : '1.71'
					},
					';',
					o.j5.xl,
					'{aspect-ratio:',
					e => {
						let { isExtension: t } = e
						return t ? '1' : '2.1'
					},
					';}',
					o.j5.s,
					'{border-radius:16px;}'
				),
				eW = (0, a.A)(u.m.create(eT.A), { target: 'e51ywz61' })(
					'top:0;border-radius:24px;video{border-radius:24px;}',
					o.j5.s,
					'{border-radius:16px;video{border-radius:16px;}}'
				),
				eG = (0, s.forwardRef)((e, t) => {
					let { title: r, type: n, preview: a } = e
					return (0, i.Y)(e_, {
						ref: t,
						isExtension: 'extension' === n,
						span: { desktop: 5, mobile: 6, tablet: 6 },
						start: { desktop: 8, mobile: 1, tablet: 2 },
						children: (0, i.Y)(et.N, {
							children: (0, eO.n)(eW, {
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								exit: { opacity: 0 },
								transition: { duration: 0.3 },
								...a,
								stretch: !0,
								sizes: { desktop: '661px', mobile: '468px', tablet: '468px' },
								key: r,
							}),
						}),
					})
				}),
				eK = (0, a.A)('section', { target: 'ew4hr3k0' })(
					'z-index:',
					e => {
						let { zIndex: t } = e
						return t
					},
					';position:relative;display:flex;justify-content:center;align-items:center;flex-direction:column;width:100%;padding:',
					e => {
						let { isHero: t } = e
						return t
							? 'calc(var(--spacingXXXL) * 2) 0 var(--spacingXXL)'
							: 'var(--spacingXXL) 0'
					},
					';',
					o.j5.xl,
					'{padding-top:',
					e => {
						let { isHero: t } = e
						return !t && 'var(--spacingL)'
					},
					';}',
					o.j5.m,
					'{padding-top:',
					e => {
						let { isHero: t } = e
						return t && 'calc(var(--spacingXXXL) + var(--spacingXS))'
					},
					';padding-bottom:var(--spacingL);}'
				),
				eJ = (0, a.A)(x.VP, { target: 'ew4hr3k1' })(
					'display:flex;flex-wrap:wrap;gap:',
					o.wT.desktop,
					'px;',
					o.j5.xl,
					'{gap:',
					o.wT.tablet,
					'px;}',
					o.j5.m,
					'{gap:',
					o.wT.mobile,
					'px;}'
				)
			var eU = r(71024)
			let eQ = r.n(eU)()(
					() => Promise.all([r.e(7e3), r.e(1594)]).then(r.bind(r, 31738)),
					{ loadableGenerated: { webpack: () => [31738] }, ssr: !1 }
				),
				e$ = (0, a.A)('section', { target: 'e1ev669d0' })(
					'position:relative;z-index:',
					e => {
						let { zIndex: t } = e
						return t
					},
					';display:flex;justify-content:center;align-items:center;flex-direction:column;width:100%;padding:var(--spacingXXL) 0;',
					o.j5.xl,
					'{padding-top:',
					e => {
						let { isHero: t } = e
						return !t && 'var(--spacingL)'
					},
					';padding-left:32px;padding-right:32px;}',
					o.j5.m,
					'{padding-top:',
					e => {
						let { isHero: t } = e
						return t && 'calc(var(--spacingXXXL) + var(--spacingXS))'
					},
					';padding-left:16px;padding-right:16px;padding-bottom:var(--spacingL);}'
				),
				eZ = e => {
					let { investors: t } = e
					return (
						t &&
						t.map(e =>
							(0, i.Y)(
								e5,
								{
									start: { mobile: 2, tablet: 0, desktop: 0 },
									span: { mobile: 4, tablet: 2, desktop: 3 },
									children: (0, i.FD)(e6, {
										children: [
											(0, i.Y)(e3, {
												image: e.image,
												sizes: { desktop: '100%' },
												showBorderRadius: !!e.name,
											}),
											e.name && (0, i.Y)(e8, { size: 's', children: e.name }),
										],
									}),
								},
								e._key
							)
						)
					)
				},
				e0 = (0, a.A)('section', { target: 'e6vej650' })(
					'z-index:',
					e => {
						let { zIndex: t } = e
						return t
					},
					';padding:var(--spacingXL) 0;'
				),
				e1 = (0, a.A)('div', { target: 'e6vej651' })(
					'position:relative;display:flex;background-color:',
					e => {
						let { background: t } = e
						return t ? 'var(--'.concat(t, ')') : 'var(--white)'
					},
					';width:100%;'
				),
				e2 = (0, a.A)(x.e, { target: 'e6vej652' })(
					'padding:var(--spacingL);',
					o.j5.s,
					'{grid-row-gap:var(--spacingL);padding-left:var(--spacingXL);padding-right:var(--spacingXL);}'
				),
				e5 = (0, a.A)(x.VP, { target: 'e6vej653' })(
					'position:relative;display:flex;align-items:center;align-self:center;justify-content:center;flex-direction:column;padding:0 var(--spacingL);',
					o.j5.l,
					'{padding:0 var(--spacingS);}'
				),
				e6 = (0, a.A)('div', { target: 'e6vej654' })(
					'display:flex;align-items:center;justify-content:center;flex-direction:column;'
				),
				e3 = (0, a.A)(v.A, { target: 'e6vej655' })(
					'display:flex;object-fit:cover;object-position:center;height:90px;border-radius:',
					e => {
						let { showBorderRadius: t } = e
						return t ? '16px' : '0px'
					},
					';'
				),
				e8 = (0, a.A)(h.Pd, { target: 'e6vej656' })(
					'padding:var(--spacingS) 0;'
				),
				e4 = (0, a.A)(x.VP, { target: 'e1curjg10' })(
					'background-color:var(--light3);border-radius:16px;transition:background-color 0.2s ease-in,color 0.2s ease-in,transform 0.2s ease-in;@media (hover:hover){&:hover{background-color:var(--light3);color:var(--midnightPurple);transform:scale(0.989);}}',
					o.j5.m,
					'{margin-top:4px;}'
				),
				e9 = (0, a.A)(eR.A, { target: 'e1curjg11' })(
					'display:flex;justify-content:space-between;align-items:center;padding:var(--spacingM);',
					o.j5.m,
					'{padding:var(--spacingS);}'
				),
				e7 = (0, a.A)(h.Pd, { target: 'e1curjg12' })(
					'font-size:20px;color:var(--dark3);'
				),
				te = (0, a.A)(h.Pd, { target: 'e1curjg13' })(
					'font-size:20px;color:var(--dark3);'
				),
				tt = e => {
					let { title: t, jobUrl: r, location: n } = e
					return (0, i.Y)(e4, {
						as: 'li',
						start: { mobile: 1, tablet: 2, desktop: 3 },
						span: { mobile: 6, tablet: 6, desktop: 8 },
						children: (0, i.FD)(e9, {
							href: r,
							children: [
								(0, i.Y)(e7, { as: 'h3', size: 's', children: t }),
								(0, i.Y)(te, { as: 'h3', size: 's', children: n }),
							],
						}),
					})
				},
				tr = (0, a.A)('section', { target: 'evzqsvn0' })(
					'position:relative;z-index:',
					e => {
						let { zIndex: t } = e
						return t
					},
					';display:flex;justify-content:left;align-items:left;flex-direction:column;width:100%;&:last-of-type{padding-bottom:0;',
					o.j5.xl,
					'{padding-bottom:0;}}'
				),
				ti = (0, a.A)(x.e, { target: 'evzqsvn1' })(
					'grid-row-gap:8px;',
					o.j5.xl,
					'{grid-row-gap:8px;}',
					o.j5.m,
					'{grid-row-gap:4px;}'
				),
				tn = (0, a.A)(x.e, { target: 'evzqsvn2' })(
					'grid-row-gap:8px;margin-top:var(--spacingXS);margin-bottom:var(--spacingXS);',
					o.j5.xl,
					'{grid-row-gap:8px;}',
					o.j5.m,
					'{grid-row-gap:4px;}'
				),
				ta = (0, a.A)(x.VP, { target: 'evzqsvn3' })(
					'display:flex;justify-content:space-between;padding-bottom:var(--spacingM);margin-top:var(--spacingXS);margin-bottom:var(--spacingXS);cursor:pointer;border-bottom:2px var(--grey) solid;',
					e => {
						let { isOpen: t } = e
						return t && (0, eO.AH)('border-bottom:none;padding-bottom:0;')
					},
					' ',
					o.j5.m,
					'{margin-bottom:var(--spacingXS);}'
				),
				to = (0, a.A)(h.Pd, { target: 'evzqsvn4' })('color:var(--dark3);'),
				tl = (0, a.A)(h.Pd, { target: 'evzqsvn5' })(
					'display:inline-block;width:26px;height:32px;border-radius:8px;margin-left:var(--spacingXS);text-align:center;background-color:var(--lilac);color:var(--dark3);line-height:35px;'
				),
				ts = (0, a.A)(ep.In, { target: 'evzqsvn6' })(
					'width:19px;height:19px;background-color:var(--lilac);height:auto;transform:',
					e => {
						let { rotate: t } = e
						return t && 'rotate('.concat(t, 'deg)')
					},
					';transition:0.2s ease-in;',
					o.j5.m,
					'{width:14px;}'
				),
				td = (0, a.A)('button', { target: 'evzqsvn7' })(
					'display:flex;align-items:center;justify-content:center;gap:4px;height:36px;width:36px;padding:8px 8px 8px 8px;color:var(--black);background-color:var(--lilac);border-radius:32px;'
				),
				tp = e => {
					let { zIndex: t, department: r, jobs: n } = e,
						[a, o] = (0, s.useState)(!1)
					return (0, i.FD)(tr, {
						zIndex: t,
						children: [
							(0, i.Y)(ti, {
								children: (0, i.FD)(ta, {
									start: { mobile: 1, tablet: 2, desktop: 3 },
									span: { mobile: 6, tablet: 6, desktop: 8 },
									onClick: () => o(e => !e),
									isOpen: a,
									children: [
										(0, i.FD)(to, {
											as: 'h2',
											size: 'm',
											children: [
												r,
												(0, i.Y)(tl, {
													size: 's',
													as: 'span',
													children: n.length,
												}),
											],
										}),
										(0, i.Y)(td, {
											'aria-controls': 'learn-filters',
											'aria-expanded': a ? 'true' : 'false',
											children: (0, i.Y)(ts, {
												type: 'chevronDown',
												rotate: a ? -180 : 0,
											}),
										}),
									],
								}),
							}),
							a &&
								(0, i.Y)(tn, {
									as: 'ul',
									children: n.map(e => (0, i.Y)(tt, { ...e }, e.id)),
								}),
						],
					})
				},
				tc = e =>
					e.reduce((e, t) => {
						let r = t.department
						return e[r] || (e[r] = []), e[r].push(t), e
					}, {}),
				tg = (0, a.A)('section', { target: 'epzeo3m0' })(
					'position:relative;z-index:',
					e => {
						let { zIndex: t } = e
						return t
					},
					';display:flex;justify-content:center;align-items:center;flex-direction:column;width:100%;padding:',
					e => {
						let { isHero: t } = e
						return t
							? 'calc(var(--spacingXXXL) * 2) 0 var(--spacingXXL)'
							: 'var(--spacingXXL) 0'
					},
					';',
					o.j5.xl,
					'{padding-top:',
					e => {
						let { isHero: t } = e
						return !t && 'var(--spacingL)'
					},
					';}',
					o.j5.m,
					'{padding-top:',
					e => {
						let { isHero: t } = e
						return t && 'calc(var(--spacingXXXL) + var(--spacingXS))'
					},
					';padding-bottom:var(--spacingL);}'
				),
				tu = (0, a.A)(h.Pd, { target: 'epzeo3m1' })(
					'color:var(--light4);position:relative;display:flex;justify-content:center;align-items:center;flex-direction:column;width:100%;padding-bottom:var(--spacingXXXL);'
				)
			var tx = r(46446)
			let th = (0, a.A)('section', { target: 'ej3yite0' })(
					'position:relative;display:flex;justify-content:center;align-items:center;flex-direction:column;width:100%;padding:calc(var(--spacingXL) * 2) 48px;'
				),
				tm = (0, a.A)(tx.A, { target: 'ej3yite1' })(
					'display:flex;object-fit:cover;object-position:center;'
				),
				tv = (0, a.A)(Z.A, { target: 'ej3yite2' })(
					'margin-top:48px;z-index:100;',
					o.j5.xl,
					'{margin-top:24px;}',
					o.j5.m,
					'{margin-top:16px;}'
				)
			var tf = r(83872),
				tb = r(42130)
			let tw = (0, a.A)('div', { target: 'e1t6yyox0' })(
					'transform:translateY(25vh);pointer-events:none;'
				),
				tj = {
					moduleCardsSliderBasic: G.A,
					moduleCardsSliderWithIntro: e => {
						let { intro: t, chip: r, cards: n, zIndex: a, isHero: o } = e,
							[d, p] = (0, s.useState)(!1),
							[c, g] = (0, s.useState)(0)
						return (0, i.FD)(U, {
							zIndex: a,
							isHero: o,
							children: [
								(0, i.Y)(l.A, { intro: t, isHero: o }),
								(0, i.Y)(J.A, {
									chip: r,
									barPosition: 'top',
									onIndexChange: e => {
										g(e)
									},
									onInView: () => {
										p(!0)
									},
									id: 'carousel-'.concat(a),
									isFullWidthModule: !0,
									children: (0, i.Y)(K.A, {
										cards: n,
										selectedIndex: c,
										featureFirstCard: !0,
										isInView: d,
									}),
								}),
							],
						})
					},
					moduleCardsBasic: W.A,
					moduleCardsWithIntro: Q.A,
					moduleBlockContentBasic: e => {
						let { content: t, zIndex: r, isHero: n } = e
						return (0, i.Y)(T, {
							zIndex: r,
							isHero: n,
							children: (0, i.Y)(O.A, { content: t, showWayFinder: !1 }),
						})
					},
					moduleBlockContentWithIntro: e => {
						let { intro: t, content: r, zIndex: n, isHero: a } = e
						return (0, i.FD)(_, {
							zIndex: n,
							isHero: a,
							children: [
								(0, i.Y)(l.A, { intro: t, isHero: a }),
								(0, i.Y)(O.A, { content: r, showWayFinder: !1 }),
							],
						})
					},
					moduleCta: e => {
						let {
								subtitles: t,
								title: r,
								buttonType: n,
								button: a,
								detectButton: o,
							} = e,
							[l, d] = (0, s.useState)(!1)
						return (0, i.Y)(el, {
							children: (0, i.Y)(x.e, {
								children: (0, i.FD)(x.VP, {
									start: { mobile: 1, tablet: 1, desktop: 1 },
									span: { mobile: 6, tablet: 8, desktop: 12 },
									children: [
										t ? (0, i.Y)(ea, { subtitles: t }) : null,
										(0, i.Y)(eo.A, { data: r, play: l }),
										(0, i.Y)(es, {
											children:
												'detect' === n
													? (0, i.Y)(ee.A, {
															...o,
															onMouseEnter: () => d(!0),
															onMouseLeave: () => d(!1),
													  })
													: (0, i.Y)(Z.A, {
															...(0, $.pJ)(a.link),
															variant: 'large',
															onMouseEnter: () => d(!0),
															onMouseLeave: () => d(!1),
															children: a.label,
													  }),
										}),
									],
								}),
							}),
						})
					},
					moduleThemeSwitcher: e => {
						let { newTheme: t, _key: r } = e,
							n = (0, tf.Xr)(tb.Db),
							[a, { top: o }] = (0, eh.A)(),
							l = (0, y.A)(),
							d = (0, s.useRef)(),
							p = (0, s.useCallback)(
								e => {
									a(e), (d.current = e)
								},
								[a]
							)
						return (
							(0, s.useEffect)(() => {
								if (l)
									return (
										n({ type: 'add', data: { top: o, newTheme: t, key: r } }),
										() => n({ type: 'remove', key: r })
									)
							}, [r, t, o, l, n]),
							(0, i.Y)(tw, { ref: p })
						)
					},
					moduleDownload: e => {
						let { intro: t, apps: r, zIndex: n, isHero: a, onOpenModal: o } = e,
							d = (0, s.useRef)(null),
							[p, c] = (0, s.useState)(0),
							g = r[p],
							u = (0, s.useCallback)(e => {
								c(e)
							}, [])
						return (0, i.FD)(eK, {
							ref: d,
							isHero: a,
							zIndex: n,
							children: [
								(0, i.Y)(l.A, { intro: t, isHero: a }),
								(0, i.FD)(x.e, {
									children: [
										(0, i.Y)(eJ, {
											span: { desktop: 6, mobile: 6, tablet: 6 },
											start: { desktop: 1, mobile: 1, tablet: 2 },
											children: r.map((e, t) =>
												(0, i.Y)(
													eN,
													{
														onMouseOver: () => u(t),
														onOpenModal: o,
														...e,
														title: 'Web Wallet',
													},
													e._id
												)
											),
										}),
										g && (0, i.Y)(eG, { ...g, title: 'Web Wallet' }),
									],
								}),
							],
						})
					},
					moduleAboutTimeline: e => {
						let { intro: t, items: r, zIndex: n, isHero: a } = e
						return (0, i.FD)(B, {
							zIndex: n,
							isHero: a,
							children: [
								(0, i.Y)(l.A, { intro: t, isHero: a }),
								r.map(e => (0, i.Y)(H, { ...e }, null == e ? void 0 : e._key)),
							],
						})
					},
					moduleJobsWithIntro: e => {
						let { intro: t, url: r, zIndex: n, isHero: a } = e,
							[o, d] = (0, s.useState)({})
						return (
							(0, s.useEffect)(() => {
								;(async () => {
									try {
										let { urlExternal: e } = r,
											t = await fetch(e),
											{ jobs: i } = await t.json(),
											n = tc(i)
										d(n)
									} catch (e) {}
								})()
							}, [r]),
							(0, i.FD)(tg, {
								zIndex: n,
								isHero: a,
								children: [
									(0, i.Y)(l.A, { intro: t, isHero: a }),
									o
										? Object.entries(o).map((e, t) => {
												let [r, n] = e
												return (0, i.Y)(
													tp,
													{ department: r, jobs: n, zIndex: n.length + t },
													r
												)
										  })
										: (0, i.Y)(tu, {
												as: 'h3',
												size: 's',
												children: 'No jobs currently available',
										  }),
								],
							})
						)
					},
					moduleInvestors: e => {
						let { investors: t, background: r, zIndex: n } = e
						return (0, i.Y)(e0, {
							zIndex: n,
							children: (0, i.Y)(e1, {
								background: r,
								children: (0, i.Y)(e2, {
									as: 'ul',
									children: (0, i.Y)(eZ, { investors: t }),
								}),
							}),
						})
					},
					moduleMediaFullBleed: e => {
						let {
							mediaFullBleed: t,
							button: r,
							buttonVariant: n = 'arrowDown',
						} = e
						return (0, i.FD)(th, {
							children: [
								(0, i.Y)(tm, { ...t }),
								r
									? (0, i.Y)(tv, {
											...(0, $.pJ)(r.link),
											variant: n,
											children: r.label,
									  })
									: null,
							],
						})
					},
					moduleDAppsWithFilter: e => {
						let {
								intro: t,
								cards: r,
								randomize: n,
								showMoreButtonText: a,
								zIndex: o,
								isHero: d,
							} = e,
							{ query: p } = (0, ed.useRouter)(),
							[c, g] = (0, s.useState)(0),
							[u, x] = (0, s.useState)([]),
							h = (0, s.useMemo)(
								() => r.reduce((0, ec.dE)('dApp'), []).reduce(ec.BA, []),
								[r]
							),
							m = (0, s.useMemo)(() => h.filter(e => (0, eg.B)(p, e)), [h, p]),
							v = m.length > 0,
							f = (0, s.useMemo)(
								() => r.filter(e => e.dApp.tags.some(e => (0, eg.B)(p, e))),
								[r, p]
							),
							b = (0, s.useMemo)(() => (v ? f : r), [v, f, r]),
							w = (0, s.useMemo)(() => b.filter(e => e.featured), [b])
						;(0, s.useEffect)(() => {
							g(8 - w.length), x(n ? (0, ec.gv)(b, 'featured') : b)
						}, [b, w.length, n])
						let j = (0, s.useCallback)(() => g(e => e + 4), []),
							A = u.slice(0, c)
						return (0, i.FD)(eL, {
							zIndex: o,
							children: [
								(null == t ? void 0 : t.title) &&
									(0, i.Y)(l.A, { intro: t, isHero: d }),
								(0, i.Y)(eY, { filters: h, activeCount: m.length }),
								(0, i.Y)(ez, {
									as: 'ul',
									children: (0, i.Y)(K.A, {
										cards: A,
										flow: !1,
										noAnimationInView: !0,
									}),
								}),
								a &&
									u.length > c &&
									(0, i.Y)(eC, {
										children: (0, i.FD)(eF, {
											'aria-label': 'Show More apps',
											onClick: j,
											children: [
												(0, i.Y)(eD, {
													children: (0, i.Y)(ep.In, { type: 'arrowDown' }),
												}),
												a,
											],
										}),
									}),
							],
						})
					},
					moduleFaucetBasic: e => {
						let { zIndex: t, isHero: r, faucet: n } = e,
							{ defaultMedia: a, disclaimer: o } = n
						return (0, i.Y)(e$, {
							zIndex: t,
							isHero: r,
							id: 'module-faucet',
							children: n && (0, i.Y)(eQ, { media: a, disclaimer: o }),
						})
					},
					moduleAccordion: function (e) {
						let { intro: t, accordion: r, zIndex: n, isHero: a } = e
						return (0, i.FD)(N, {
							zIndex: n,
							isHero: a,
							children: [
								(0, i.Y)(l.A, { intro: t, isHero: a }),
								(0, i.Y)(x.e, {
									children: (0, i.Y)(x.VP, {
										span: { mobile: 12, tablet: 6, desktop: 6 },
										start: { mobile: 1, tablet: 2, desktop: 4 },
										children: (0, i.Y)(V.A, { items: r.items }),
									}),
								}),
							],
						})
					},
					moduleDisclaimer: function (e) {
						let { disclaimer: t, zIndex: r, isHero: n } = e
						return (0, i.Y)(eP, {
							zIndex: r,
							isHero: n,
							children: (0, i.Y)(x.e, {
								children: (0, i.Y)(x.VP, {
									span: { desktop: 10, tablet: 8, mobile: 6 },
									start: { desktop: 2, tablet: 1, mobile: 1 },
									children: (0, i.Y)(eM, { content: t }),
								}),
							}),
						})
					},
				},
				tA = e => {
					let t = tj[e]
					return e && !t
						? (console.error(
								'Component not found. Check getModuleComponent and make sure that the schema type "'.concat(
									e,
									'" is mapped to a corresponding React Component.'
								)
						  ),
						  n.A)
						: t
				},
				ty = e => {
					let { hasHero: t, modules: r, onOpenModal: n } = e
					return r
						? (0, i.Y)(i.FK, {
								children: r.map((e, a) => {
									let o = tA(e._type)
									return (0, i.Y)(
										o,
										{
											onOpenModal: n,
											isHero: t && 0 === a,
											zIndex: r.length - 1 - a,
											...e,
										},
										e._key
									)
								}),
						  })
						: null
				}
		},
		71942: (e, t, r) => {
			r.d(t, { A: () => A })
			var i = r(2860),
				n = r(55729),
				a = r(81278),
				o = r(20696),
				l = r(57029),
				s = r(70508),
				d = r(80229),
				p = r(90280),
				c = r(654),
				g = r(9381),
				u = r(97453),
				x = r(13203),
				h = r(86639)
			let m = [0, 0.2],
				v = [0, 1],
				f = [0.95, 1],
				b = (0, o.A)('div', { target: 'ek9wfq50' })(
					'padding:',
					e => {
						let { isHero: t } = e
						return t ? '0 20px var(--spacingXXL)' : '0 20px'
					},
					';',
					x.j5.xl,
					'{padding-bottom:',
					e => {
						let { isHero: t } = e
						return t && 'var(--spacingXL)'
					},
					';}',
					e => {
						let { isSticky: t, isHero: r } = e
						return (
							t &&
							'\n    position: relative;\n    margin: '
								.concat(
									!r && 'calc(-50vh - var(--spacingXXL) * 2) auto 0',
									';\n    height: '
								)
								.concat(!r && '150vh', ';\n  ')
						)
					},
					';'
				),
				w = (0, o.A)('div', { target: 'ek9wfq51' })(
					'position:absolute;width:100%;left:0;',
					e => {
						let { forStickyHeader: t } = e
						return t
							? '\n    top: 75%;\n    height: 50px;\n    transform: translateY(-50%);\n    '
							: '\n    top: 0;\n    height: 100%;\n    '
					}
				),
				j = (0, o.A)('div', { target: 'ek9wfq52' })(
					'width:100%;margin-bottom:',
					e => {
						let { marginBottomCorrection: t } = e
						return ''.concat(t + 96, 'px')
					},
					';',
					x.j5.xl,
					'{margin-bottom:',
					e => {
						let { marginBottomCorrection: t } = e
						return ''.concat(t + 64, 'px')
					},
					';}',
					x.j5.m,
					'{margin-bottom:',
					e => {
						let { marginBottomCorrection: t } = e
						return ''.concat(t + 80, 'px')
					},
					';}',
					e => {
						let { isSticky: t } = e
						return (
							t &&
							'\n    position: sticky;\n    top: 50vh;\n    transform: translateY(-50%);\n  '
						)
					},
					';> div{display:flex;flex-direction:column;align-items:center;}'
				),
				A = e => {
					let { intro: t, isHero: r } = e,
						{ asPath: o } = (0, a.useRouter)(),
						[x, A] = (0, n.useState)(!0),
						y = (0, n.useRef)(!1),
						k = (0, n.useCallback)(
							() => o.split('#')[1] === (0, u.Xx)(t.title[0]),
							[o, t.title]
						)
					;(0, n.useLayoutEffect)(() => {
						A(!k())
					}, [k])
					let X = (0, n.useRef)(null),
						Y = (0, n.useRef)(null),
						L = (0, n.useRef)(null),
						{ height: z } = (0, g.A)({ ref: L }),
						{ scrollYProgress: C } = (0, l.L)({
							target: Y,
							offset: ['start start', 'end 50vh'],
						}),
						F = (0, s.W)(X, {
							margin: x ? '-20% 0px -20% 0px' : '0px 0px 0px 0px',
						})
					;(0, n.useEffect)(() => {
						k() &&
							(F && !y.current ? (y.current = !0) : !F && y.current && A(!0))
					}, [k, F])
					let D = (0, d.G)(x ? C : (0, p.OQ)(100), m, v),
						S = (0, d.G)(x ? C : (0, p.OQ)(100), m, f),
						I = x ? -(z / 2) : 0
					return (0, i.FD)(b, {
						ref: Y,
						isHero: r,
						isSticky: x,
						children: [
							(0, i.Y)(w, { ref: X, forStickyHeader: x }),
							r
								? (0, i.Y)(h.A, { ...t, isInView: F, isHero: r })
								: (0, i.Y)(j, {
										isSticky: x,
										ref: L,
										marginBottomCorrection: I,
										children: (0, i.Y)(c.m.div, {
											style: { opacity: D, scale: S },
											children: (0, i.Y)(h.A, { ...t, isInView: F, isHero: r }),
										}),
								  }),
						],
					})
				}
		},
	},
])
