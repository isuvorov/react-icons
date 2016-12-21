'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaFighterJet = function (_React$Component) {
    _inherits(FaFighterJet, _React$Component);

    function FaFighterJet() {
        _classCallCheck(this, FaFighterJet);

        return _possibleConstructorReturn(this, (FaFighterJet.__proto__ || Object.getPrototypeOf(FaFighterJet)).apply(this, arguments));
    }

    _createClass(FaFighterJet, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm39.9 21.3q-0.1 0.7-6 2l-7.3 0.7-4.7 1.3h-1.3l-6.1 7.3h1.4q0.6 0 1 0.1t0.4 0.3-0.4 0.2-1 0.1h-6.6v-0.7h1.3v-8.6h-3.3l-4 4.6h-2l-0.6-0.6v-4h0.6v-0.7h2.7v-0.1l-4-0.5v-2.7l4-0.5v-0.2h-2.7v-0.6h-0.6v-4l0.6-0.7h2l4 4.7h3.3v-8.7h-1.3v-0.6h6.6q0.6 0 1 0.1t0.4 0.2-0.4 0.2-1 0.1h-1.4l6.1 7.3h1.3l4.7 1.4 7.3 0.6q5.4 1.2 5.9 2z' })
                )
            );
        }
    }]);

    return FaFighterJet;
}(React.Component);

exports.default = FaFighterJet;
module.exports = exports['default'];