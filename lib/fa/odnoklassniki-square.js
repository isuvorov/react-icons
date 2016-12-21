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

var FaOdnoklassnikiSquare = function (_React$Component) {
    _inherits(FaOdnoklassnikiSquare, _React$Component);

    function FaOdnoklassnikiSquare() {
        _classCallCheck(this, FaOdnoklassnikiSquare);

        return _possibleConstructorReturn(this, (FaOdnoklassnikiSquare.__proto__ || Object.getPrototypeOf(FaOdnoklassnikiSquare)).apply(this, arguments));
    }

    _createClass(FaOdnoklassnikiSquare, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.7 12.9q0 1.5-1 2.6t-2.6 1-2.5-1-1-2.6 1-2.5 2.5-1 2.6 1 1 2.5z m4.8 8.1q-0.3-0.4-0.7-0.7t-1-0.2-1.4 0.6q-0.2 0.2-0.6 0.5t-1.8 0.7-2.9 0.4-2.7-0.4-1.9-0.8l-0.6-0.4q-0.7-0.5-1.4-0.6t-1.1 0.2-0.6 0.7q-0.5 1.1 0 1.7t1.9 1.7q1.9 1.1 5.1 1.4l-1.2 1.2q-3.1 3.2-4.2 4.3-0.5 0.4-0.5 1.1t0.5 1.2l0.2 0.2q0.4 0.5 1.1 0.5t1.2-0.5l4.3-4.3q2.5 2.6 4.2 4.3 0.5 0.5 1.2 0.5t1.2-0.5l0.2-0.2q0.5-0.5 0.5-1.2t-0.5-1.1l-4.3-4.3-1.2-1.2q3.2-0.3 5.1-1.4 1.5-1 1.9-1.7t0-1.7z m-1.1-8.1q0-2.9-2.1-5.1t-5.2-2.1-5.1 2.1-2.1 5.1 2.1 5.2 5.1 2.1 5.2-2.1 2.1-5.2z m9.9-3.6v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z' })
                )
            );
        }
    }]);

    return FaOdnoklassnikiSquare;
}(React.Component);

exports.default = FaOdnoklassnikiSquare;
module.exports = exports['default'];