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

var FaTumblrSquare = function (_React$Component) {
    _inherits(FaTumblrSquare, _React$Component);

    function FaTumblrSquare() {
        _classCallCheck(this, FaTumblrSquare);

        return _possibleConstructorReturn(this, (FaTumblrSquare.__proto__ || Object.getPrototypeOf(FaTumblrSquare)).apply(this, arguments));
    }

    _createClass(FaTumblrSquare, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.4 32.6l-1.4-4.1q-1 0.5-2.3 0.5-0.8 0-1.4-0.2t-0.9-0.7-0.4-0.9-0.1-1v-8.9h5.8v-4.3h-5.8v-7.3h-4.1q-0.2 0-0.2 0.2-0.2 1-0.4 2t-0.9 2.1-1.7 2.1-2.7 1.5v3.7h2.9v9.4q0 1.2 0.5 2.5t1.5 2.5 2.7 1.9 3.9 0.7q1.5 0 3-0.6t2-1.1z m8.9-23.3v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z' })
                )
            );
        }
    }]);

    return FaTumblrSquare;
}(React.Component);

exports.default = FaTumblrSquare;
module.exports = exports['default'];