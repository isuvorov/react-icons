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

var IoHeadphone = function (_React$Component) {
    _inherits(IoHeadphone, _React$Component);

    function IoHeadphone() {
        _classCallCheck(this, IoHeadphone);

        return _possibleConstructorReturn(this, (IoHeadphone.__proto__ || Object.getPrototypeOf(IoHeadphone)).apply(this, arguments));
    }

    _createClass(IoHeadphone, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.9 18.6c0.3 4-0.2 10.2-1 12.7-1.6 5.2-3.1 6.2-5.6 6.2s-4.5-2.1-4.5-4.6v-8.3c0-2.6 1.7-4.6 4.1-4.6 1.4 0 2.6 0.7 3.4 1.9 0 0 0.9-0.6 1-1.7s0.4-2.7-0.3-5-1.7-1.5-2.9-3c-0.1-0.2-0.3-0.6-0.6-0.8l-0.8-0.8c-0.1-0.1-0.2-0.2-0.4-0.3-0.8-0.7-1.6-1.3-2.6-1.8-1.5-0.7-3.1-1-4.7-1s-3.3 0.3-4.8 1c-1 0.5-1.7 1.1-2.5 1.8-0.2 0.1-0.3 0.2-0.4 0.3l-0.8 0.8s-0.5 0.6-0.6 0.8c-1.2 1.5-2.2 0.6-2.9 3-0.7 2.4-0.5 3.8-0.3 5s1 1.7 1 1.7c0.8-1.2 2-1.9 3.4-1.9 2.4 0 4.2 2.1 4.2 4.6v8.3c0 2.5-2.1 4.6-4.6 4.6s-4-1-5.6-6.2c-0.8-2.5-1.3-8.7-1-12.7 0.2-4.7 1.7-8.4 4.4-11.3 0.6-0.7 1.1-1.3 1.8-1.8s1.5-1 2.3-1.4c1.9-1.1 4.1-1.6 6.4-1.6s4.5 0.5 6.4 1.6c0.8 0.4 1.5 0.8 2.2 1.4s1.3 1.1 1.9 1.8c2.7 2.9 4.2 6.6 4.4 11.3z' })
                )
            );
        }
    }]);

    return IoHeadphone;
}(React.Component);

exports.default = IoHeadphone;
module.exports = exports['default'];