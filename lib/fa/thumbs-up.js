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

var FaThumbsUp = function (_React$Component) {
    _inherits(FaThumbsUp, _React$Component);

    function FaThumbsUp() {
        _classCallCheck(this, FaThumbsUp);

        return _possibleConstructorReturn(this, (FaThumbsUp.__proto__ || Object.getPrototypeOf(FaThumbsUp)).apply(this, arguments));
    }

    _createClass(FaThumbsUp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm7.7 30q0-0.6-0.4-1t-1-0.4q-0.6 0-1 0.4t-0.4 1q0 0.6 0.4 1t1 0.4q0.6 0 1-0.4t0.4-1z m3.6-11.4v14.3q0 0.5-0.4 1t-1 0.4h-6.5q-0.6 0-1-0.4t-0.4-1v-14.3q0-0.6 0.4-1t1-0.5h6.5q0.5 0 1 0.5t0.4 1z m26.4 0q0 1.9-1.2 3.3 0.3 1 0.3 1.7 0.1 1.7-0.9 3.1 0.3 1.2 0 2.6-0.4 1.2-1.2 2.1 0.2 2.5-1.1 4-1.5 1.7-4.4 1.7h-2.9q-1.5 0-3.2-0.3t-2.7-0.6-2.7-0.9q-2.8-1-3.6-1-0.5 0-1-0.4t-0.4-1v-14.3q0-0.6 0.4-1t1-0.5q0.5 0 1.7-1.3t2.2-2.7q1.5-1.9 2.3-2.7 0.4-0.4 0.7-1t0.4-1.1 0.3-1.4q0.1-0.9 0.2-1.3t0.5-1.2 0.7-1.1q0.5-0.4 1-0.4 1.1 0 1.9 0.2t1.3 0.6 0.9 0.9 0.6 1 0.2 1.1 0.1 1 0 0.9q0 0.8-0.2 1.7t-0.4 1.3-0.6 1.3q-0.1 0.1-0.2 0.4t-0.3 0.4-0.2 0.6h6.2q1.8 0 3 1.3t1.3 3z' })
                )
            );
        }
    }]);

    return FaThumbsUp;
}(React.Component);

exports.default = FaThumbsUp;
module.exports = exports['default'];