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

var FaSpotify = function (_React$Component) {
    _inherits(FaSpotify, _React$Component);

    function FaSpotify() {
        _classCallCheck(this, FaSpotify);

        return _possibleConstructorReturn(this, (FaSpotify.__proto__ || Object.getPrototypeOf(FaSpotify)).apply(this, arguments));
    }

    _createClass(FaSpotify, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.2 27q0-0.7-0.7-1.1-4.3-2.6-10-2.6-3 0-6.4 0.8-0.9 0.2-0.9 1.1 0 0.5 0.3 0.8t0.8 0.3q0.1 0 0.8-0.2 2.9-0.6 5.4-0.6 5.1 0 8.9 2.3 0.4 0.3 0.7 0.3 0.4 0 0.7-0.3t0.4-0.8z m2.1-4.8q0-0.9-0.8-1.4-5.3-3.1-12.2-3.1-3.4 0-6.8 0.9-1 0.3-1 1.5 0 0.5 0.3 0.9t1 0.4q0.1 0 0.8-0.2 2.7-0.7 5.6-0.7 6.2 0 10.9 2.8 0.5 0.3 0.9 0.3 0.5 0 0.9-0.4t0.4-1z m2.4-5.5q0-1.1-0.9-1.6-2.8-1.6-6.5-2.5t-7.7-0.8q-4.5 0-8.1 1.1-0.5 0.1-0.9 0.5t-0.3 1.1q0 0.7 0.5 1.2t1.1 0.4q0.2 0 0.9-0.1 3-0.9 6.8-0.9 3.6 0 7 0.8t5.6 2.1q0.5 0.3 0.9 0.3 0.7 0 1.1-0.5t0.5-1.1z m4.6 3.3q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z' })
                )
            );
        }
    }]);

    return FaSpotify;
}(React.Component);

exports.default = FaSpotify;
module.exports = exports['default'];