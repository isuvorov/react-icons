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

var IoAndroidTrain = function (_React$Component) {
    _inherits(IoAndroidTrain, _React$Component);

    function IoAndroidTrain() {
        _classCallCheck(this, IoAndroidTrain);

        return _possibleConstructorReturn(this, (IoAndroidTrain.__proto__ || Object.getPrototypeOf(IoAndroidTrain)).apply(this, arguments));
    }

    _createClass(IoAndroidTrain, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm6 27.1v-16.7c0-5.9 6.4-6.6 13.8-6.6s13.7 0.7 13.7 6.6v16.7c0 3.3-2.6 5.8-5.9 5.8l2.2 2.1v1.3h-20v-1.3l2.1-2.1c-3.3 0-5.9-2.5-5.9-5.8z m13.8 2.3c1.7 0 3.1-1.4 3.1-3.1s-1.4-3.2-3.1-3.2-3.2 1.4-3.2 3.2 1.4 3.1 3.2 3.1z m10-11.9v-7.5h-20v7.5h20z' })
                )
            );
        }
    }]);

    return IoAndroidTrain;
}(React.Component);

exports.default = IoAndroidTrain;
module.exports = exports['default'];