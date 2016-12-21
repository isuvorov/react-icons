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

var IoIosBasketball = function (_React$Component) {
    _inherits(IoIosBasketball, _React$Component);

    function IoIosBasketball() {
        _classCallCheck(this, IoIosBasketball);

        return _possibleConstructorReturn(this, (IoIosBasketball.__proto__ || Object.getPrototypeOf(IoIosBasketball)).apply(this, arguments));
    }

    _createClass(IoIosBasketball, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.8 3.8c8.9 0 16.2 7.2 16.2 16.2s-7.3 16.3-16.2 16.3-16.3-7.3-16.3-16.3 7.3-16.2 16.3-16.2z m9.7 27.5c-1.7-4-4.1-7.6-6.9-10.8 0.8-1 1.6-2 2.4-3 2.6 2.1 6 3.5 9.6 3.8 0-0.4 0.1-0.9 0.1-1.3-1.7-0.2-3.5-0.5-5.1-1.2-1.4-0.7-2.7-1.4-3.8-2.3 1.6-2.4 2.9-4.8 4-7.4-0.3-0.4-0.6-0.7-0.9-0.9 0 0.1-0.1 0.1-0.1 0.2-1.1 2.5-2.5 5-4.1 7.2-0.1-0.1-0.1-0.1-0.3-0.3-1.4-1.5-2.7-3.2-3.5-5.1-0.7-1.7-1-3.4-1.2-5.1-0.3 0-0.8 0.1-1.2 0.1 0.3 4.5 2.4 8.5 5.5 11.4-0.7 1.1-1.4 2-2.3 2.9-3.7-3.9-8.2-7.1-13.2-9.3-0.3 0.3-0.5 0.7-0.8 1.1 4.6 2 8.8 4.8 12.4 8.4l0.7 0.8-0.6 0.6c-1 1-2 1.9-3.1 2.8-3.1-3.4-7.3-5.5-12.1-5.8-0.1 0.4-0.1 0.9-0.1 1.3 2 0.1 3.8 0.5 5.6 1.2 1.9 0.8 3.6 2.1 5.1 3.5l0.6 0.6c-2.5 1.9-5.2 3.4-8 4.7 0.3 0.3 0.5 0.7 0.8 1 2.9-1.3 5.5-2.9 7.9-4.8 0.9 1.1 1.7 2.4 2.2 3.7 0.8 1.8 1.2 3.6 1.3 5.5 0.4 0 0.8 0 1.2 0-0.1-3.8-1.5-7.2-3.6-10 1.3-1 2.5-2.1 3.7-3.4 2.8 3.2 5.1 6.7 6.8 10.6 0.3-0.2 0.7-0.4 1-0.7z' })
                )
            );
        }
    }]);

    return IoIosBasketball;
}(React.Component);

exports.default = IoIosBasketball;
module.exports = exports['default'];