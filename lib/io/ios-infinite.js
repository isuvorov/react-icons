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

var IoIosInfinite = function (_React$Component) {
    _inherits(IoIosInfinite, _React$Component);

    function IoIosInfinite() {
        _classCallCheck(this, IoIosInfinite);

        return _possibleConstructorReturn(this, (IoIosInfinite.__proto__ || Object.getPrototypeOf(IoIosInfinite)).apply(this, arguments));
    }

    _createClass(IoIosInfinite, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.8 14.2c1.6 1.6 2.5 3.6 2.5 5.8s-0.9 4.2-2.5 5.8-3.7 2.3-5.9 2.3-4.3-0.8-5.9-2.3l-9.7-9.6c-1.1-1-2.5-1.6-4-1.6s-2.9 0.6-3.9 1.6-1.7 2.4-1.7 3.8c0 1.5 0.7 2.8 1.7 3.8s2.4 1.6 3.9 1.6 3-0.6 4-1.6l3-2.9 2 1.9-3.1 3c-1.5 1.5-3.7 2.3-5.9 2.3s-4.3-0.8-5.9-2.3-2.4-3.6-2.4-5.8 0.9-4.2 2.4-5.8 3.7-2.3 5.9-2.3 4.4 0.8 5.9 2.3l9.8 9.6c1 1 2.4 1.6 3.9 1.6s3-0.6 4-1.6 1.5-2.4 1.5-3.8c0-1.5-0.5-2.8-1.5-3.8s-2.5-1.6-4-1.6-2.9 0.6-3.9 1.6l-3.1 2.9-1.9-1.9 3-3c1.6-1.5 3.8-2.3 6-2.3s4.3 0.8 5.8 2.3z' })
                )
            );
        }
    }]);

    return IoIosInfinite;
}(React.Component);

exports.default = IoIosInfinite;
module.exports = exports['default'];