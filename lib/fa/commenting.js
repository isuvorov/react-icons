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

var FaCommenting = function (_React$Component) {
    _inherits(FaCommenting, _React$Component);

    function FaCommenting() {
        _classCallCheck(this, FaCommenting);

        return _possibleConstructorReturn(this, (FaCommenting.__proto__ || Object.getPrototypeOf(FaCommenting)).apply(this, arguments));
    }

    _createClass(FaCommenting, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm14.3 20q0-1.2-0.9-2t-2-0.9-2 0.9-0.8 2 0.8 2 2 0.9 2-0.9 0.9-2z m8.6 0q0-1.2-0.9-2t-2-0.9-2 0.9-0.9 2 0.9 2 2 0.9 2-0.9 0.9-2z m8.5 0q0-1.2-0.8-2t-2-0.9-2 0.9-0.9 2 0.9 2 2 0.9 2-0.9 0.8-2z m8.6 0q0 3.9-2.7 7.2t-7.3 5.2-10 1.9q-2.5 0-4.7-0.4-3.9 3.8-9.7 5.1-1.2 0.2-1.9 0.3-0.3 0-0.5-0.1t-0.3-0.4q-0.1-0.4 0.4-0.9 0.1-0.1 0.5-0.5t0.6-0.5 0.5-0.5 0.6-0.8 0.4-0.8 0.5-1 0.3-1.3 0.3-1.6q-3.3-2.1-5.1-4.9t-1.9-6q0-3.9 2.7-7.2t7.3-5.2 10-1.9 10 1.9 7.3 5.2 2.7 7.2z' })
                )
            );
        }
    }]);

    return FaCommenting;
}(React.Component);

exports.default = FaCommenting;
module.exports = exports['default'];