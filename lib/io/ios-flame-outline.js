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

var IoIosFlameOutline = function (_React$Component) {
    _inherits(IoIosFlameOutline, _React$Component);

    function IoIosFlameOutline() {
        _classCallCheck(this, IoIosFlameOutline);

        return _possibleConstructorReturn(this, (IoIosFlameOutline.__proto__ || Object.getPrototypeOf(IoIosFlameOutline)).apply(this, arguments));
    }

    _createClass(IoIosFlameOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 2.5c6.8 5 13.3 14 12.4 22.5-1 10.5-8.1 12.5-9.9 12.5s-9.9-3.1-10-12.5c-0.1-11.4 9.5-11.2 7.5-22.5z m2.5 34.4s3.1-2.8 3.1-6.3-3.1-6.2-3.1-6.2-3.2 2.8-3.2 6.2 3.2 6.3 3.2 6.3z m8.7-12.1c0.4-3.6-0.8-7.7-3.2-11.8-1.8-2.8-3.9-5.4-6.5-7.7 0 4.5-1.9 7.1-3.8 9.6-2.1 2.7-3.9 5.1-3.9 10.1 0 2 0.3 3.8 1.1 5.3 0.6 1.3 1.6 2.5 2.8 3.5 0.6 0.6 1.2 1 1.8 1.3-0.7-1.3-1.5-2.8-1.5-4.5 0-4 3.5-7 3.6-7.2l0.9-0.7 0.9 0.7c0.1 0.2 3.5 3.2 3.5 7.2 0 1.8-0.7 3.5-1.5 4.7 0.5-0.3 1-0.6 1.6-1.1 1-0.9 1.9-2.1 2.6-3.4 0.9-1.7 1.3-3.7 1.6-6z' })
                )
            );
        }
    }]);

    return IoIosFlameOutline;
}(React.Component);

exports.default = IoIosFlameOutline;
module.exports = exports['default'];