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

var IoIosBasketballOutline = function (_React$Component) {
    _inherits(IoIosBasketballOutline, _React$Component);

    function IoIosBasketballOutline() {
        _classCallCheck(this, IoIosBasketballOutline);

        return _possibleConstructorReturn(this, (IoIosBasketballOutline.__proto__ || Object.getPrototypeOf(IoIosBasketballOutline)).apply(this, arguments));
    }

    _createClass(IoIosBasketballOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.8 3.8c8.9 0 16.2 7.2 16.2 16.2s-7.3 16.3-16.2 16.3-16.3-7.3-16.3-16.3 7.3-16.2 16.3-16.2z m14.9 16.2c0-4.3-1.9-8.2-4.9-10.9-1.1 2.6-2.4 5-4 7.4 1.1 0.9 2.4 1.6 3.8 2.3 1.6 0.7 3.4 1 5.1 1.2z m-5.8-11.8c-2.5-2-5.7-3.1-9.2-3.1 0.2 1.7 0.5 3.4 1.2 5.1 0.8 1.9 2.1 3.6 3.5 5.1 0.2 0.1 0.2 0.2 0.4 0.3 1.5-2.2 2.9-4.7 4-7.2 0-0.1 0.1-0.1 0.1-0.2z m-10.4-3c-4 0.3-7.5 2.2-10 5 5 2.2 9.5 5.4 13.2 9.3 0.9-0.9 1.6-1.8 2.3-2.9-3.1-2.8-5.2-6.9-5.5-11.4z m3.2 16.2c-1.2 1.3-2.4 2.4-3.7 3.4 2.1 2.8 3.5 6.2 3.6 10 2.6-0.3 4.9-1.4 6.9-2.8-1.7-3.9-4-7.4-6.8-10.6z m-1.5-0.3l0.6-0.6-0.7-0.8c-3.6-3.6-7.8-6.4-12.4-8.5-1.4 2-2.4 4.3-2.7 6.9 4.8 0.3 9 2.4 12.1 5.8 1.1-0.9 2.1-1.8 3.1-2.8z m-15.3-1.7c0 0.2-0.1 0.4-0.1 0.6 0 3.5 1.3 6.8 3.4 9.4 2.8-1.3 5.5-2.8 8-4.7l-0.6-0.6c-1.5-1.4-3.2-2.7-5.1-3.5-1.8-0.7-3.6-1.1-5.6-1.2z m4.1 11c2.8 2.8 6.5 4.5 10.7 4.5 0.3 0 0.4-0.1 0.7-0.1-0.1-1.9-0.5-3.7-1.3-5.5-0.5-1.3-1.3-2.6-2.2-3.7-2.4 1.9-5 3.5-7.9 4.8z m20.5 0.9c2.9-2.5 4.8-6.1 5.1-10-3.6-0.3-7-1.7-9.6-3.8-0.8 1-1.6 2-2.4 3 2.8 3.2 5.2 6.8 6.9 10.8z' })
                )
            );
        }
    }]);

    return IoIosBasketballOutline;
}(React.Component);

exports.default = IoIosBasketballOutline;
module.exports = exports['default'];