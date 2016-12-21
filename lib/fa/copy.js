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

var FaCopy = function (_React$Component) {
    _inherits(FaCopy, _React$Component);

    function FaCopy() {
        _classCallCheck(this, FaCopy);

        return _possibleConstructorReturn(this, (FaCopy.__proto__ || Object.getPrototypeOf(FaCopy)).apply(this, arguments));
    }

    _createClass(FaCopy, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.9 8.6q0.9 0 1.5 0.6t0.6 1.5v27.2q0 0.9-0.6 1.5t-1.5 0.6h-21.5q-0.9 0-1.5-0.6t-0.6-1.5v-6.5h-12.2q-0.9 0-1.5-0.6t-0.6-1.5v-15q0-0.9 0.4-2t1.1-1.7l9.1-9.1q0.6-0.6 1.7-1.1t2-0.4h9.3q0.9 0 1.5 0.6t0.6 1.5v7.4q1.5-0.9 2.9-0.9h9.3z m-12.2 4.7l-6.7 6.7h6.7v-6.7z m-14.3-8.5l-6.6 6.6h6.6v-6.6z m4.4 14.4l7.1-7.1v-9.2h-8.6v9.2q0 0.9-0.6 1.6t-1.6 0.6h-9.2v14.3h11.4v-5.7q0-0.9 0.4-2t1.1-1.7z m21.3 17.9v-25.7h-8.5v9.3q0 0.9-0.7 1.5t-1.5 0.7h-9.3v14.2h20z' })
                )
            );
        }
    }]);

    return FaCopy;
}(React.Component);

exports.default = FaCopy;
module.exports = exports['default'];