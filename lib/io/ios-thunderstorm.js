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

var IoIosThunderstorm = function (_React$Component) {
    _inherits(IoIosThunderstorm, _React$Component);

    function IoIosThunderstorm() {
        _classCallCheck(this, IoIosThunderstorm);

        return _possibleConstructorReturn(this, (IoIosThunderstorm.__proto__ || Object.getPrototypeOf(IoIosThunderstorm)).apply(this, arguments));
    }

    _createClass(IoIosThunderstorm, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.5 21.3h3.1l-6.9 10 2.3-7.5h-4.1l1.2-6.3h5.6z m-5.4-5h8.3l-1.2 3.7h3.7l-2.6 3.8h1.5c2.8 0 5.1-2.4 5.1-5.2s-2.3-5.1-5.1-5.1h-0.6c-0.6-2.7-3-4.7-5.9-4.7-3.4 0-6.1 2.7-6.1 6v0.7c-2.1 0.1-3.7 2-3.7 4.1 0 2.3 1.9 4.2 4.1 4.2h1.1z' })
                )
            );
        }
    }]);

    return IoIosThunderstorm;
}(React.Component);

exports.default = IoIosThunderstorm;
module.exports = exports['default'];