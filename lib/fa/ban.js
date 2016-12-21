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

var FaBan = function (_React$Component) {
    _inherits(FaBan, _React$Component);

    function FaBan() {
        _classCallCheck(this, FaBan);

        return _possibleConstructorReturn(this, (FaBan.__proto__ || Object.getPrototypeOf(FaBan)).apply(this, arguments));
    }

    _createClass(FaBan, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.3 19.9q0-3.6-2-6.6l-16.8 16.9q3.1 1.9 6.6 1.9 2.5 0 4.8-0.9t3.8-2.6 2.6-3.9 1-4.8z m-22.3 6.7l16.8-16.8q-3-2.1-6.7-2.1-3.3 0-6.1 1.7t-4.4 4.4-1.6 6.1q0 3.6 2 6.7z m27.3-6.7q0 3.5-1.4 6.7t-3.6 5.5-5.5 3.7-6.7 1.3-6.6-1.3-5.5-3.7-3.6-5.5-1.4-6.7 1.4-6.7 3.6-5.4 5.5-3.7 6.6-1.4 6.7 1.4 5.5 3.7 3.6 5.4 1.4 6.7z' })
                )
            );
        }
    }]);

    return FaBan;
}(React.Component);

exports.default = FaBan;
module.exports = exports['default'];