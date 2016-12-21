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

var IoIosWorldOutline = function (_React$Component) {
    _inherits(IoIosWorldOutline, _React$Component);

    function IoIosWorldOutline() {
        _classCallCheck(this, IoIosWorldOutline);

        return _possibleConstructorReturn(this, (IoIosWorldOutline.__proto__ || Object.getPrototypeOf(IoIosWorldOutline)).apply(this, arguments));
    }

    _createClass(IoIosWorldOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.8 3.8c8.9 0 16.2 7.2 16.2 16.2s-7.3 16.3-16.2 16.3-16.3-7.3-16.3-16.3 7.3-16.2 16.3-16.2z m0.6 9.6v6h5.8c0-2.4-0.4-4.7-0.8-6.6-1.7 0.4-3.3 0.6-5 0.6z m0-1.2c1.5-0.1 3.2-0.2 4.7-0.6-1.1-3.6-3-6-4.7-6.4v7z m-1.3-7c-1.8 0.4-3.5 2.8-4.7 6.4 1.5 0.4 3.1 0.5 4.7 0.6v-7z m0 8.2c-1.7 0-3.4-0.2-5.1-0.6-0.4 1.9-0.7 4.2-0.8 6.6h5.9v-6z m-7.2 6c0.1-2.5 0.4-4.9 0.9-6.9-1.6-0.5-3.2-1.2-4.6-2-2 2.5-3.2 5.5-3.4 8.9h7.1z m0 1.2h-7.1c0.2 3.4 1.4 6.4 3.4 8.9 1.5-0.8 3-1.5 4.6-2-0.6-2-0.8-4.4-0.9-6.9z m1.3 0c0.1 2.4 0.4 4.7 0.8 6.6 1.7-0.4 3.4-0.6 5.1-0.7v-5.9h-5.9z m5.9 7.2c-1.6 0.1-3.2 0.2-4.7 0.6 1.2 3.6 2.9 6 4.7 6.4v-7z m1.3 7c1.7-0.4 3.6-2.8 4.7-6.4-1.5-0.4-3.2-0.5-4.7-0.6v7z m0-8.3c1.7 0.1 3.3 0.3 5 0.7 0.4-1.9 0.8-4.2 0.8-6.6h-5.8v5.9z m7.2-5.9c-0.1 2.5-0.4 4.9-1 6.9 1.7 0.5 3.2 1.2 4.7 2 2-2.5 3.2-5.5 3.4-8.9h-7.1z m0-1.2h7.1c-0.2-3.4-1.4-6.4-3.4-8.9-1.5 0.8-3 1.5-4.6 2 0.6 2 0.8 4.4 0.9 6.9z m2.8-9.9c-2-1.9-4.4-3.4-7.1-4 1.2 1.3 2.2 3.3 3 5.8 1.4-0.5 2.7-1.1 4.1-1.8z m-14.2-4c-2.7 0.6-5.2 2.1-7.1 4 1.3 0.7 2.7 1.2 4.1 1.7 0.8-2.4 1.8-4.4 3-5.7z m-7.1 25c2 1.9 4.4 3.4 7.1 4-1.2-1.3-2.3-3.3-3.1-5.7-1.4 0.4-2.7 1-4 1.7z m14.2 4c2.7-0.6 5.1-2.1 7.1-4-1.4-0.7-2.7-1.3-4.1-1.8-0.8 2.5-1.8 4.5-3 5.8z' })
                )
            );
        }
    }]);

    return IoIosWorldOutline;
}(React.Component);

exports.default = IoIosWorldOutline;
module.exports = exports['default'];