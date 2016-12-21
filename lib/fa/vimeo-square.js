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

var FaVimeoSquare = function (_React$Component) {
    _inherits(FaVimeoSquare, _React$Component);

    function FaVimeoSquare() {
        _classCallCheck(this, FaVimeoSquare);

        return _possibleConstructorReturn(this, (FaVimeoSquare.__proto__ || Object.getPrototypeOf(FaVimeoSquare)).apply(this, arguments));
    }

    _createClass(FaVimeoSquare, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.8 14.2q0.3-4.8-3.6-4.9-5.1-0.2-6.9 5.8 1-0.4 1.8-0.4 1.9 0 1.7 2.1-0.1 1.3-1.7 3.8t-2.3 2.4q-1 0-1.9-3.8-0.3-1.2-1-5.6-0.6-4.3-3.5-4-1.4 0.2-3.7 2.2l-3.6 3.2 1.1 1.5q1.7-1.1 2-1.1 1.3 0 2.4 4 0.3 1.2 1 3.7t1 3.6q1.5 4 3.6 4 3.6 0 8.6-6.5 4.9-6.4 5-10z m5.5-4.9v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z' })
                )
            );
        }
    }]);

    return FaVimeoSquare;
}(React.Component);

exports.default = FaVimeoSquare;
module.exports = exports['default'];