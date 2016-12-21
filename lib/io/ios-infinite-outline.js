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

var IoIosInfiniteOutline = function (_React$Component) {
    _inherits(IoIosInfiniteOutline, _React$Component);

    function IoIosInfiniteOutline() {
        _classCallCheck(this, IoIosInfiniteOutline);

        return _possibleConstructorReturn(this, (IoIosInfiniteOutline.__proto__ || Object.getPrototypeOf(IoIosInfiniteOutline)).apply(this, arguments));
    }

    _createClass(IoIosInfiniteOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.7 14.7c1.5 1.5 2.3 3.3 2.3 5.3s-0.8 3.8-2.3 5.3c-1.4 1.4-3.4 2.2-5.4 2.2s-3.9-0.8-5.4-2.2l-9.9-9.6c-1.1-1.2-2.7-1.7-4.3-1.7s-3.2 0.5-4.3 1.7c-2.5 2.3-2.5 6.3 0 8.6 1.1 1.2 2.6 1.7 4.3 1.7s3.2-0.5 4.3-1.7l3.4-3.3 1 1.1-3.3 3.2c-1.5 1.4-3.4 2.2-5.4 2.2s-4-0.8-5.4-2.2c-1.5-1.5-2.3-3.3-2.3-5.3s0.8-3.8 2.3-5.3c1.4-1.4 3.3-2.2 5.4-2.2s3.9 0.8 5.4 2.2l9.9 9.6c1.1 1.2 2.6 1.7 4.3 1.7s3.2-0.5 4.3-1.7c2.5-2.3 2.5-6.3 0-8.6-1.1-1.2-2.7-1.7-4.3-1.7s-3.2 0.5-4.3 1.7l-3.4 3.3-1-1.1 3.3-3.2c1.5-1.4 3.4-2.2 5.4-2.2s3.9 0.8 5.4 2.2z' })
                )
            );
        }
    }]);

    return IoIosInfiniteOutline;
}(React.Component);

exports.default = IoIosInfiniteOutline;
module.exports = exports['default'];