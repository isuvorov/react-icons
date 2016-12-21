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

var IoIonic = function (_React$Component) {
    _inherits(IoIonic, _React$Component);

    function IoIonic() {
        _classCallCheck(this, IoIonic);

        return _possibleConstructorReturn(this, (IoIonic.__proto__ || Object.getPrototypeOf(IoIonic)).apply(this, arguments));
    }

    _createClass(IoIonic, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.9 10.4c1.9 2.6 3.1 6 3.1 9.6 0 9-7.3 16.3-16.2 16.3s-16.3-7.3-16.3-16.3 7.3-16.2 16.3-16.2c3.5 0 6.9 1.1 9.6 3.1 0.4-0.3 0.8-0.4 1.4-0.4 1.4 0 2.5 1.1 2.5 2.5 0 0.5-0.2 1-0.4 1.4z m-2.5 20.2c1.4-1.4 2.4-2.9 3.2-4.7 0.8-1.9 1.2-3.9 1.2-5.9s-0.4-4-1.2-5.9c-0.5-1-1-2-1.7-2.9-0.3 0.1-0.7 0.3-1.1 0.3-1.4 0-2.5-1.1-2.5-2.5 0-0.4 0.1-0.9 0.3-1.2-1-0.6-2-1.2-3-1.6-1.9-0.8-3.8-1.2-5.8-1.2s-4 0.4-5.9 1.2c-1.8 0.8-3.4 1.8-4.8 3.2s-2.4 2.9-3.2 4.7c-0.8 1.9-1.1 3.9-1.1 5.9s0.3 4 1.1 5.9c0.8 1.8 1.8 3.3 3.2 4.7s3 2.4 4.8 3.2c1.9 0.8 3.8 1.2 5.9 1.2s3.9-0.4 5.8-1.2c1.8-0.8 3.4-1.8 4.8-3.2z m-18.1-10.6c0-5 2.5-7.5 7.5-7.5s7.5 2.5 7.5 7.5-2.5 7.5-7.5 7.5-7.5-2.5-7.5-7.5z' })
                )
            );
        }
    }]);

    return IoIonic;
}(React.Component);

exports.default = IoIonic;
module.exports = exports['default'];