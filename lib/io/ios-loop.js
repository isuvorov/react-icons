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

var IoIosLoop = function (_React$Component) {
    _inherits(IoIosLoop, _React$Component);

    function IoIosLoop() {
        _classCallCheck(this, IoIosLoop);

        return _possibleConstructorReturn(this, (IoIosLoop.__proto__ || Object.getPrototypeOf(IoIosLoop)).apply(this, arguments));
    }

    _createClass(IoIosLoop, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm38.3 20l0.9 0.9-4.1 4.1-4.1-4.1 0.8-0.9 3.3 3.2z m-2.2 0c0 0.5 0 1.1-0.1 1.6l-1.2 0c0-0.6 0-1.1 0-1.7 0-8-6.6-14.6-14.7-14.6-5.3 0-10.2 2.9-12.8 7.5l-1.1-0.6c2.8-5 8.2-8.1 13.9-8.1 8.8 0 15.9 7.1 16 15.7v0.2z m-3.1 7.2l1 0.6c-2.8 5-8.1 8.1-13.9 8.1-8.6 0-15.7-7-15.9-15.6v-0.3c0-0.5 0-1.1 0.1-1.6l1.2 0c0 0.6 0 1.1 0 1.7 0 8 6.6 14.6 14.6 14.6 5.4 0 10.3-2.9 12.9-7.5z m-27.9-12.2l4.1 4.1-0.9 0.9-3.2-3.2-3.2 3.2-0.9-0.9z' })
                )
            );
        }
    }]);

    return IoIosLoop;
}(React.Component);

exports.default = IoIosLoop;
module.exports = exports['default'];