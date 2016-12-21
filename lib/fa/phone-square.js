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

var FaPhoneSquare = function (_React$Component) {
    _inherits(FaPhoneSquare, _React$Component);

    function FaPhoneSquare() {
        _classCallCheck(this, FaPhoneSquare);

        return _possibleConstructorReturn(this, (FaPhoneSquare.__proto__ || Object.getPrototypeOf(FaPhoneSquare)).apply(this, arguments));
    }

    _createClass(FaPhoneSquare, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.6 26.6q0-0.2-0.1-0.3 0-0.2-0.8-0.7t-2-1.1l-1.2-0.6q-0.1-0.1-0.4-0.3t-0.6-0.4-0.4-0.1q-0.4 0-1.1 0.7t-1.3 1.5-0.9 0.7q-0.2 0-0.4 0t-0.4-0.2-0.3-0.2-0.4-0.2q-2.2-1.2-3.8-2.8t-2.8-3.8q0-0.1-0.2-0.3t-0.2-0.4-0.1-0.3-0.1-0.4q0-0.3 0.4-0.8t1.1-0.8 1-0.9 0.4-0.8q0-0.2-0.1-0.5t-0.3-0.5-0.3-0.5q-0.1-0.1-0.4-0.6t-0.5-1-0.6-1.1-0.6-0.9-0.3-0.4-0.4 0q-1.1 0-2.2 0.5-1.1 0.4-1.8 2.1t-0.8 2.9q0 0.3 0.1 0.7t0.1 0.7 0.2 0.8 0.2 0.6 0.3 0.8 0.2 0.6q1.4 3.7 4.9 7.2t7.1 4.8q0.2 0.1 0.7 0.3t0.7 0.2 0.7 0.3 0.7 0.2 0.7 0.1 0.8 0q1.2 0 2.9-0.7t2.1-1.8q0.5-1.2 0.5-2.3z m5.7-17.3v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z' })
                )
            );
        }
    }]);

    return FaPhoneSquare;
}(React.Component);

exports.default = FaPhoneSquare;
module.exports = exports['default'];