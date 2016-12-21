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

var IoBowtie = function (_React$Component) {
    _inherits(IoBowtie, _React$Component);

    function IoBowtie() {
        _classCallCheck(this, IoBowtie);

        return _possibleConstructorReturn(this, (IoBowtie.__proto__ || Object.getPrototypeOf(IoBowtie)).apply(this, arguments));
    }

    _createClass(IoBowtie, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm15 16.6s0.6-0.4 1.6-0.6c1.6-0.3 3-0.4 3.6 0.7 0.8 1.3 1.5 4.2 1.4 6.7-0.1 1.3-0.4 1.7-0.4 1.7s-1.2 0.8-3.7 0.5c-2.7-0.2-3.1-1.1-3.1-1.1s0.4-1 0.6-3.4 0-4.5 0-4.5z m-3.1 5.7c-1.4 0.3-3 0.7-3 0.7s3.5-0.3 5-0.7c-0.3 1.7-0.8 2.7-0.8 2.7s-6.5 6.3-9 6.3c-2.2 0-4.1-5.4-4.1-11.3s2-11.2 4.1-11.2c2.7 0 8.2 4.4 10 7.5 0 0 0.2 1.3 0.1 2.5-0.8-0.4-1.9-0.8-3.4-1.1-2.2-0.4-3.3-0.2-3.3-0.2s1.4 0.3 4.4 1.3c1.2 0.4 1.8 0.7 2.3 0.8 0 0.2-0.1 0.6-0.1 0.8 0 0.4 0 0.8 0 1.2-0.4 0.1-1.2 0.4-2.2 0.7z m19-13.5c2.1 0 4.1 5.3 4.1 11.2s-1.9 11.3-4.1 11.3c-2.9 0-8.1-5.4-8.7-6.2 0 0 0.3-0.4 0.4-1.7v-0.7c1.2 0.5 5.4 1 5.4 1s-1.6-0.5-3.1-0.9c-1-0.3-1.9-0.6-2.3-0.8-0.1-0.8-0.2-1.8-0.3-2.5 1.3-0.9 5.4-2.7 5.4-2.7s-1.2 0.2-2.8 0.7c-1.1 0.4-2.2 0.9-2.9 1.1-0.2-0.8-0.5-1.4-0.8-1.9 0-0.1 0-0.3 0-0.3v-0.1c1.7-3.1 6.9-7.6 9.7-7.6z' })
                )
            );
        }
    }]);

    return IoBowtie;
}(React.Component);

exports.default = IoBowtie;
module.exports = exports['default'];