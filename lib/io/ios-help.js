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

var IoIosHelp = function (_React$Component) {
    _inherits(IoIosHelp, _React$Component);

    function IoIosHelp() {
        _classCallCheck(this, IoIosHelp);

        return _possibleConstructorReturn(this, (IoIosHelp.__proto__ || Object.getPrototypeOf(IoIosHelp)).apply(this, arguments));
    }

    _createClass(IoIosHelp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.8 3.8c8.9 0 16.2 7.2 16.2 16.2s-7.3 16.3-16.2 16.3-16.3-7.3-16.3-16.3 7.3-16.2 16.3-16.2z m0.3 24.8c0.7 0 1.3-0.6 1.3-1.3s-0.6-1.4-1.3-1.4-1.4 0.7-1.4 1.4 0.7 1.3 1.4 1.3z m2.6-9c1.2-1.1 2-2.3 2-4 0-2.6-2.1-4.2-4.6-4.2-3.4 0-5.4 1.6-5.4 4.8h1.5c0-2.3 1.3-3.5 3.8-3.5 1.8 0 3.3 1.1 3.3 3 0 1.2-0.7 2.3-1.5 3-1.8 1.7-2.3 2.9-2.4 5h1.5c0.1-2 0-2.4 1.8-4.1z' })
                )
            );
        }
    }]);

    return IoIosHelp;
}(React.Component);

exports.default = IoIosHelp;
module.exports = exports['default'];