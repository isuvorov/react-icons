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

var IoJet = function (_React$Component) {
    _inherits(IoJet, _React$Component);

    function IoJet() {
        _classCallCheck(this, IoJet);

        return _possibleConstructorReturn(this, (IoJet.__proto__ || Object.getPrototypeOf(IoJet)).apply(this, arguments));
    }

    _createClass(IoJet, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm24.8 28.8l-0.1 1 4.1 4.5-1.4 2.1-5.8-0.7-1.4 4.3-1.4-4.3-5.8 0.7-1.4-2.1 4.2-4.5-0.2-1-8.1 2.7 0.2-4.2 8.9-8s2.1-13.5 2.2-15c0.4-3.1 1.4-4.3 1.4-4.3s1.1 1.2 1.4 4.3c0.2 1.5 2.2 15 2.2 15l8.9 8 0.3 4.2z' })
                )
            );
        }
    }]);

    return IoJet;
}(React.Component);

exports.default = IoJet;
module.exports = exports['default'];