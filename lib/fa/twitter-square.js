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

var FaTwitterSquare = function (_React$Component) {
    _inherits(FaTwitterSquare, _React$Component);

    function FaTwitterSquare() {
        _classCallCheck(this, FaTwitterSquare);

        return _possibleConstructorReturn(this, (FaTwitterSquare.__proto__ || Object.getPrototypeOf(FaTwitterSquare)).apply(this, arguments));
    }

    _createClass(FaTwitterSquare, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.6 13.6q-1.3 0.6-2.7 0.8 1.5-0.9 2-2.6-1.4 0.8-2.9 1.1-1.4-1.5-3.5-1.5-1.9 0-3.3 1.4t-1.3 3.3q0 0.7 0.1 1.1-2.9-0.2-5.4-1.5t-4.3-3.4q-0.7 1.1-0.7 2.3 0 2.6 2.1 3.9-1.1 0-2.3-0.5v0q0 1.7 1.1 3t2.8 1.6q-0.7 0.2-1.1 0.2-0.3 0-0.9-0.1 0.4 1.4 1.6 2.3t2.8 1q-2.6 2-5.9 2-0.6 0-1.1-0.1 3.3 2.1 7.2 2.1 2.5 0 4.7-0.8t3.7-2.1 2.7-3.1 1.7-3.6 0.5-3.7q0-0.4 0-0.7 1.4-1 2.4-2.4z m5.7-4.3v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z' })
                )
            );
        }
    }]);

    return FaTwitterSquare;
}(React.Component);

exports.default = FaTwitterSquare;
module.exports = exports['default'];